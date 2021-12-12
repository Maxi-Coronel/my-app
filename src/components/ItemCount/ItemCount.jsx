import React, {useState} from "react"
import { useAddToCart, UseOnSustract ,UseOnAdd } from "../../context/CartContext"

export const ItemCount = ({product}) => {

    const addToCart = useAddToCart()
    const onSustract = UseOnSustract()
    const onAdd = UseOnAdd()

    const [cantItems, setCantItems] = useState(0)

    const {
        title,
        stock
    } = product

    return(
        <>
        <h3>{title}</h3>
        <div className='flex-center'>
            <button className='pad-5' onClick={() => onSustract(cantItems, setCantItems)}>-</button>
            <p className='pad-5'>{cantItems}</p>
            <button className='pad-5' onClick={() => onAdd(cantItems, setCantItems, stock)}>+</button>
        </div>
        <button onClick={() => addToCart(product, cantItems)}>Add</button>
        </>
    )
}