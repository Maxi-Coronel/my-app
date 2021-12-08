import React, { useContext, useEffect, useState } from "react";
import { productos } from "../components/Item/Items";

const Products = React.createContext()

export function ProductsProvider({ children }){

    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)

    /* useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []) */

    useEffect(() => {
        setProducts(productos)
    }, [])
    

    const openCard = () => {
        setIsCardOpen(!isCardOpen)
    }

    const isOnCart = (product) => {
        return cartItem?.findIndex(item => item.id === product.id)
    }

    const addToCart = (product) => {
        if (isOnCart(product) === -1) {
            setCartItem([...cartItem, product])            
        }else{

        }
    }

    const deletFromCart = (product) => {
        setCartItem(cartItem.filter(item => item.id !== product.id))
    }

    return(
        <Products.Provider value={{ products, isCardOpen, openCard, addToCart, cartItem, deletFromCart }}>
            {children}
        </Products.Provider>
    )
}

export function useIsCardOpen(){
    return useContext(Products).isCardOpen
}

export function useCardOpen(){
    return useContext(Products).openCard
}

export function useAddToCart(){
    return useContext(Products).addToCart
}

export function useCartItem(){
    return useContext(Products).cartItem
}

export function useDeletFromCart(){
    return useContext(Products).deletFromCart
}

export default Products