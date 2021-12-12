import React from "react";
import { ItemCount } from '../../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { UseIrCart } from "../../../context/CartContext";

export const ItemDetail = ({ product }) => {

    const IrCart = UseIrCart()

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
                {IrCart ? (<Link to="/cart"><button className='borderRad-5 agregar'>Terminar compra</button></Link>)
                        : (<ItemCount
                            key={product.id}
                            product={product}/>)}
            </div>
        </div>
    )
}