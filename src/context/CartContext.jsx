import React, { useEffect, useState } from "react";
//import { productos } from "../components/Items/Items";
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore'

const Products = React.createContext()

export function ProductsProvider({ children }){

    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [irCart, setIrCart] = useState(false);
    const db = getFirestore()
    const ref = collection(db, 'products')
    const refCart = collection(db, 'cartItem')



    //const db = getFirestore()
    //const ref = collection(db, 'products')
    //const refCart = collection(db, 'cartItems')


    //data.map((product) => addDoc(ref, product))





   

    useEffect(() => {
        getDocs(ref)
        .then((snapShot) => {
            setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            /* snapShot.docs.map((product) => setProducts(prev => ([...prev, product.data()]))) */
            //setIsLoading(false)
          })
    }, [])

    /* useEffect(() => {
        getDocs(ref)
        .then((snapShot) => {
            setCartItem(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
          })
    }, []) */

    const getCartItem = () => {

    }

    


    /* useEffect(() => {
        setProducts(productos)
    }, [])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []) */

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
            /* addDoc(refCart, product)
            getCartItem()


            setIrCart(true) */
            setCartItem([...cartItem, {...product, quantityCart:cantidad}])
            setIrCart(true)
        }else{
            if (product.quantityCart < product.stock) {
                sumaCantidad(product, cantidad)
            }
        }
    }

    const deletFromCart = (product) => {
        setCartItem(cartItem.filter(item => item.id !== product.id))
    }

    const deletCart = () => {
        setCartItem([])
    }

    const sumaCantidad = (product, quantity) => {
        const cantidad = [...cartItem];
        cantidad.forEach((c) =>{
            if (c.quantityCart+quantity <= c.stock && quantity !== 0) {
                c.id === product.id && (c.quantityCart += quantity)
            }
        })
        setCartItem(cantidad)
    }

    console.log(products);

    return(
        <Products.Provider 
        value={{
            irCart,
            products,
            isCardOpen,
            cartItem,
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