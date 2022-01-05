import React, { useEffect, useState } from "react";
import {addDoc, collection, getDocs, doc, getFirestore, updateDoc, deleteDoc} from 'firebase/firestore'

const Products = React.createContext()

export function ProductsProvider({ children }){

    /* const [products, setProducts] = useState([]) */
    const [cartItem, setCartItem] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [isUserOpen, setIsUserOpen] = useState(false)
    const [userEmail, setUserEmail] = useState([])
    const db = getFirestore()
    /* const ref = collection(db, 'products') */
    const refCart = collection(db, 'cartItem')

    /* useEffect(() => {
        getDocs(ref)
        .then((snapShot) => {
            setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
          })
    },[])    */ 

    const getCartItem = () => {
        getDocs(refCart)
            .then((snapShot) => {
                setCartItem(snapShot.docs.map((doc) => ({...doc.data()})))
            })
    }

    const total = () => {
        const sumaTotal = cartItem.reduce((x, y) => x + y.price * y.quantityCart, 0);
        return sumaTotal;
    };

    const quantityTotal = () => {
        const sumaTotal = cartItem.reduce((x, y) => x + y.quantityCart, 0);
        return sumaTotal;
    };

    const onAdd = (cantItems, setCantItems, stock) => {
        if((cantItems) < stock){
            setCantItems(cantItems +1);
        }
    }

    const onSustract = (cantItems, setCantItems) => {
        if(cantItems > 0){
            setCantItems(cantItems -1)
        }
    }

    const openCard = () => {
        setIsCardOpen(!isCardOpen)
    }

    const openUser = () => {
        setIsUserOpen(!isUserOpen)
    }

    const isOnCart = (product) => {
        return cartItem?.findIndex(item => item.id === product.id)
    }

    const addToCart = (product, cantidad) => {
        if (isOnCart(product) === -1 && cantidad !== 0){
            addDoc(refCart, product)
                .then(({id}) => {
                    const ref = doc(db, 'cartItem', id)
                    updateDoc(ref, { cartId: id, quantityCart:cantidad})
                })
                .then(() => {
                    getCartItem()
                })
        }else{
            const ref = cartItem.find(item => item.id === product.id)
            if (ref.quantityCart + cantidad <= product.stock) {
                const pro = doc(db, 'cartItem', ref.cartId)
                updateDoc(pro, { quantityCart: ref.quantityCart + cantidad }).then(() => {
                    getCartItem()
                })
            }
        }
    }

    const deletFromCart = (product) => {
        deleteDoc(doc(db, "cartItem", product.cartId));
        getCartItem()
    }

    const deletCart = () => {
        cartItem?.map((product) => {
            return(
                deleteDoc(doc(db, "cartItem", product.cartId))
            )
        })
        getCartItem()
    }

    useEffect(() => {
        const ocultarModal = (e) => {
            const index = (e.target.className.indexOf('ocultar'));
            if (index === -1) {
                setIsCardOpen(false)
                setIsUserOpen(false)
            }
        }
        window.addEventListener('click', ocultarModal)
        return () => {
            window.removeEventListener('click', ocultarModal)
        }
    },[])
    
    useEffect(() => {
        getCartItem()
    },[quantityTotal()])

    return(
        <Products.Provider 
        value={{
            cartItem,
            isUserOpen,
            userEmail,
            isCardOpen,
            onAdd,
            onSustract,
            addToCart,
            openUser,
            openCard,
            quantityTotal,
            total,
            deletFromCart,
            deletCart,
            setUserEmail,
            /* 
            products,
            setIsCardOpen,
            setProducts  */
        }}>
            {children}
        </Products.Provider>
    )
}

export default Products