import { useContext } from "react"
import Products from "../../../../context/CartContext"

export const CartList = ({ item }) => {

    const {deletFromCart} = useContext(Products)

    const {
        title,
        image,
        price,
        quantityCart
    } = item

    const total = price * quantityCart

    return(
        <ul className="flex-center">
            <li><img src={image} alt={title} className='img-miniatura'/></li>
            <li>${price}</li>
            <li>{quantityCart}</li>
            <li>${total}</li>
            <li><button className="ocultar btn1-red" onClick={() => deletFromCart(item)}>X</button></li>
        </ul>
    )
}