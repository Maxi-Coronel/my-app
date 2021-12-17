import React, { useEffect, useState } from "react";
import { productos } from "../components/Items/Items";
import {addDoc, collection, getDocs, doc, getFirestore, updateDoc} from 'firebase/firestore'

const Products = React.createContext()

export function ProductsProvider({ children }){

    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    /* const [irCart, setIrCart] = useState(false); */
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


    useEffect(() => {
        setCartItem(productos)
    }, [])
    
    /* useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []) */

    const total = () => {
        const sumaTotal = cartItem.reduce((x, y) => x + y.price * y.quantityCart, 0);
        return sumaTotal;
    };

    const onAdd = (cantItems, setCantItems, stock) => {
        if(cantItems < stock){
            setCantItems(cantItems +1)
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
            const ref = cartItem.find(item => item.pid === product.pid)
            const pro = doc(db, 'cartItem', ref.cartId)
            updateDoc(pro, { quantityCart: ref.quantityCart +cantidad }).then(() => {
                getCartItem()
            })
        }
    }

    const deletFromCart = (product) => {
        setCartItem(cartItem.filter(item => item.id !== product.id))
    }

    const deletCart = () => {
        setCartItem([])
    }

    return(
        <Products.Provider 
        value={{
            /* irCart, */
            products,
            isCardOpen,
            cartItem,
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