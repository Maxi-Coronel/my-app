//import { doc, getDoc, getFirestore } from "firebase/firestore"
import React, {useContext, useState} from "react"
import Products from "../../context/CartContext"

export const ItemCount = ({product}) => {

    const {
        addToCart,
        onSustract,
        onAdd,
        cartItem
    } = useContext(Products)

    const {
        stock,
    } = product

    const [cantItems, setCantItems] = useState(0)

    const button = () => {
        const quantity = cartItem.find(item => item.id === product.id);
        if (quantity !== undefined) {
            if ((quantity.quantityCart+cantItems) > stock) {
                return(true)
            }else {
                return(false)
            }
        }else {
            return(false)
        }
    }

    return(
        <div className="w-100 flex-column center">
            <div className='flex-center m-20'>
                <button className='pad-5px btn1' onClick={() => onSustract(cantItems, setCantItems)}>-</button>
                <p className='pad-5px m-20'>{cantItems}</p>
                <button className='pad-5px btn1' onClick={() => onAdd(cantItems, setCantItems, stock)}>+</button>
            </div>
            <button className="btn-count btn" onClick={() => addToCart(product, cantItems)} disabled={button()}>Agregar</button>
        </div>
    )
}