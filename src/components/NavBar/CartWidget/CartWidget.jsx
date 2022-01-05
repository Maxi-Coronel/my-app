import React, { useContext } from "react"
import { CartList } from './CartList/CartList'
import Products from '../../../context/CartContext'
import { Link } from "react-router-dom"

export const CartWidget = () => {
    
    const {
        isCardOpen,
        openCard,
        cartItem,
        total,
        deletCart,
        quantityTotal,
    } = useContext(Products)

    return(
        <>
            <button onClick={openCard} className="ocultar btn">Carrito <b>{quantityTotal()}</b></button>
            {cartItem?.length === 0 ? <></>
                :   (
                    isCardOpen &&
                    (<div className='modal-conteiner'>
                        <div className='modal-cart ocultar'>
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
                            <div className="flex-center">
                                <button className="btn" onClick={() => deletCart()}>Borrar todo</button>
                                <Link to="/cart"><button className="btn">Carrito</button></Link>
                            </div>
                            
                        </div>
                    </div>
                    )
                )
            }
        </>
    )
}