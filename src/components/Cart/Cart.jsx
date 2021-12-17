import Products from "../../context/CartContext"
import { useContext } from "react"
import { CartProd } from "./CartProd/CartProd"

export const Cart = () => {

    const {
        cartItem,
        total
    } = useContext(Products)

    return(
        <body className="background-white">
            {
                cartItem?.map((item) => {
                    return(
                        <CartProd
                        key={item.id}
                        item={item}/>
                    )
                })
            }
            <span>TOTAL ${total()}</span>
        </body>
    )
}