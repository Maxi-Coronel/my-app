import { CartList } from "../NavBar/CartList/CartList"
import Products from "../../context/CartContext"
import { useContext } from "react"

export const Cart = () => {

    const {cartItem} = useContext(Products)

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
        </>
    )
}