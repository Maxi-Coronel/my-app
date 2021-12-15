import React, { useState,useEffect, useContext } from "react"
import { CartList } from './CartList/CartList'
import Products from '../../../context/CartContext'
import { Link } from "react-router-dom"

export const CartWidget = () => {
    
    const {
        isCardOpen,
        openCard,
        cartItem,
        total,
        deletCart
    } = useContext(Products)

    return(
        <>
        <img className='img-miniatura' onClick={openCard} src='https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-carrito-de-compras-icono-de-c--rculo-by-vexels.png' alt="carrito" />
        {
            isCardOpen &&
            (<div className='modal-conteiner'>
                <div className='modal-cart'>
                    <ul className="flex">
                        <li>img</li>
                        <li>precio</li>
                        <li>cant</li>
                        <li>total</li>
                    </ul>
                    {
                        cartItem?.map((item) => {
                            return(
                                <CartList
                                key={item.id}
                                item={item}/>
                            )
                        })
                    }
                    <span>total ${total()}</span>
                    <button onClick={() => deletCart()}>Borrar todo</button>
                    <Link to="/cart">Carrito</Link>
                </div>
            </div>)
        }
        </>
    )
}