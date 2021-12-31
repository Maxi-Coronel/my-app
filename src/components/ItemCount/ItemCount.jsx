//import { doc, getDoc, getFirestore } from "firebase/firestore"
import React, {useContext, useState} from "react"
import Products from "../../context/CartContext"

export const ItemCount = ({product}) => {
    const {
        addToCart,
        onSustract,
        onAdd
    } = useContext(Products)

    const {
        title,
        stock,
    } = product


    const [cantItems, setCantItems] = useState(0)

    return(
        <div className="w-100 flex-column">
            <h3>{title}</h3>
            <div className='flex-center'>
                <button className='pad-5' onClick={() => onSustract(cantItems, setCantItems)}>-</button>
                <p className='pad-5'>{cantItems}</p>
                <button className='pad-5' onClick={() => onAdd(cantItems, setCantItems, stock)}>+</button>
            </div>
            <button onClick={() => addToCart(product, cantItems)}>Add</button>
        </div>
    )
}