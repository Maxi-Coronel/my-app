import { CartList } from "../NavBar/CartWidget/CartList/CartList"
import Products from "../../context/CartContext"
import { useContext } from "react"

export const Cart = () => {

    const {
        cartItem,
        total
    } = useContext(Products)

    return(
        <>
        {
            cartItem?.map((item) => {
                return(
                    <CartList
                    key={item.id}
                    item={item}/>
                )
            })
        }
        <span>TOTAL ${total()}</span>
        </>
    )
}