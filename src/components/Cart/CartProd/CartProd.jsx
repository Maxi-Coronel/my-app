import Products from "../../../context/CartContext"
import { useContext } from "react"

export const CartProd = ({ item }) => {
    
    const {deletFromCart} = useContext(Products)

    const {
        title,
        image,
        price,
        quantityCart,
        tituloDescripcion
    } = item

    const total = price * quantityCart

    return(
        <div className="flex-center border-down p-3 w-90 m-auto">
            <img src={image} alt={title} className="cartImg m-left" />
            <div className="flex w-75">
                <div className="w-50">
                    <h2>{title}</h2>
                    <h3>{tituloDescripcion}</h3>
                </div>
                <div className="w-50 flex-column center">
                    <span className='cartPrice'>Cantidad {quantityCart}</span>
                    <span className='cartPrice'>${total}</span>
                </div>
            </div>
            <button onClick={() => deletFromCart(item)} className="p-1 m-auto btn1-red">X</button>
        </div>
    )
}