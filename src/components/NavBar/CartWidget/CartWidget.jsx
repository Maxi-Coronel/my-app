import React from "react"
import { CartList } from '../CartList/CartList'
import { useCardOpen, useCartItem, useIsCardOpen, useDeletCart } from '../../../context/CartContext'
import { Link } from "react-router-dom"

export const CartWidget = () => {
    
    const isCardOpen = useIsCardOpen()
    const openCard = useCardOpen()
    const cartItem = useCartItem()
    const deletCart = useDeletCart()

    return(
        <>
        <img className='img-miniatura' onClick={openCard} src='https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-carrito-de-compras-icono-de-c--rculo-by-vexels.png' alt="carrito" />
        {/* <button className='cart' ><img src="" alt="" /></button> */}
        {
            isCardOpen &&
            (<div className='modal-conteiner'>
                <div className='modal-cart'>
                    {
                        cartItem?.map((item) => {
                            return(
                                <CartList
                                key={item.id}
                                item={item}/>
                            )
                        })
                    }
                    <button onClick={() => deletCart()}>Borrar todo</button>
                    <Link to="/cart">Carrito</Link>
                </div>
            </div>)
        }
        </>
    )
}