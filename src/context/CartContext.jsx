import React, { useEffect, useState } from "react";
import {addDoc, collection, getDocs, doc, getFirestore, updateDoc, deleteDoc} from 'firebase/firestore'

const Products = React.createContext()

export function ProductsProvider({ children }){

    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const db = getFirestore()
    const ref = collection(db, 'products')
    const refCart = collection(db, 'cartItem')

    useEffect(() => {
        getDocs(ref)
        .then((snapShot) => {
            setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
          })
    }, [])

    const getCartItem = () => {
        getDocs(refCart)
            .then((snapShot) => {
                setCartItem(snapShot.docs.map((doc) => ({...doc.data()})))
            })
    }

    useEffect(() => {
        getCartItem()
    }, [])

    const total = () => {
        const sumaTotal = cartItem.reduce((x, y) => x + y.price * y.quantityCart, 0);
        return sumaTotal;
    };

    const onAdd = (cantItems, setCantItems, stock, cantidad, product) => {
        if(cantItems < stock){
            setCantItems(cantItems +1);
        }
    }

    const onSustract = (cantItems, setCantItems) => {
        if(cantItems > 0){
            setCantItems(cantItems -1)
        }
    }

    const openCard = () => {
        setIsCardOpen(true)
    }

    const closeCard = () => {
        setIsCardOpen(false)
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
            if (ref.quantityCart +cantidad <= product.stock) {
                const pro = doc(db, 'cartItem', ref.cartId)
                updateDoc(pro, { quantityCart: ref.quantityCart +cantidad }).then(() => {
                    getCartItem()
                })
            }else{
                alert('La cantidad en el carrito alcanzo el stock disponible')
            }
        }
    }

    const deletFromCart = (product) => {
        deleteDoc(doc(db, "cartItem", product.cartId));
    }

    const deletCart = () => {
        cartItem?.map((product) => {
            return(
                deleteDoc(doc(db, "cartItem", product.cartId))
            )
        })
    }

    const getUser = (form) => {
        setUserEmail(form.email)
    }

    return(
        <Products.Provider 
        value={{
            products,
            isCardOpen,
            cartItem,
            userEmail,
            getUser,
            total,
            onSustract,
            onAdd,
            setProducts,
            openCard,
            addToCart,
            deletFromCart,
            deletCart 
        }}>
            {children}
        </Products.Provider>
    )
}

export default Products