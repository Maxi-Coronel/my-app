import React, { useContext, useEffect, useState } from "react";
import { productos } from "../components/Items/Items";

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
            setCartItem([...cartItem, {...product, quantityCart:cantidad}])
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
                console.log(c.quantityCart);
                console.log(c.stock);
            }
        })
        setCartItem(cantidad)
    }

    return(
        <Products.Provider value={{ onSustract, onAdd, products, setProducts, isCardOpen, openCard, addToCart, cartItem, deletFromCart, deletCart }}>
            {children}
        </Products.Provider>
    )
}

export function UseOnAdd(){
    return useContext(Products).onAdd
}

export function UseOnSustract(){
    return useContext(Products).onSustract
}

export function UsesetQuantity(){
    return useContext(Products).setQuantity
}

export function useSetProducts(){
    return useContext(Products).setProducts
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

export function useDeletCart(){
    return useContext(Products).deletCart
}

export default Products