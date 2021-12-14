import React, { useContext } from "react";
import { ItemCount } from '../../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import Products from "../../../context/CartContext";

export const ItemDetail = ({ product }) => {

    const {irCart} = useContext(Products)

    const {
        title,
        price,
        tituloDescripcion,
        descripcion,
        stock,
        image
    } = product

    return (
        <div className='flex detail'>
            <div className='pad-5 conteinerImg'>
                <img className='imgDetail' src={image} alt={title} />
            </div>
            <div className='pad-5'>
                <h2>{title}</h2>
                <p>{price}</p>
                <h4>{tituloDescripcion}</h4>
                <p>{descripcion}</p>
                <p>Cantidad disponible: {stock}</p>
                {irCart ? ( <div>
                                <Link to="/"><button className='borderRad-5 agregar'>Seguir comprando</button></Link>
                                <Link to="/cart"><button className='borderRad-5 agregar'>Terminar compra</button></Link>
                            </div>)
                        : (<ItemCount
                            key={product.id}
                            product={product}/>)}
            </div>
        </div>
    )
}