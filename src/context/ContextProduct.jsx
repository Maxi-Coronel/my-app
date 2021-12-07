import React, { useContext, useEffect, useState } from "react";

const Products = React.createContext()

export function ProductsProvider({ children }){

    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [isCardOpen, setIsCardOpen] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const openCard = () => {
        setIsCardOpen(!isCardOpen)
    }

    const addToCart = (product) => {
        setCartItem([...cartItem, product])
    }

    console.log(cartItem);

    return(
        <Products.Provider value={{ products, isCardOpen, openCard, addToCart, cartItem }}>
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

export default Products