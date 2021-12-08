import { useAddToCart } from "../../context/ContextProduct"

export const Item = ({ product }) => {

    const addToCart = useAddToCart()

    const {
        image,
        title,
        price,
        id
    } = product

    return(
        <div className='flex borderRad-5 tarjeta'>
            <div className='flex black presentacion' key={id}>
                    <img className='img' src={image} alt={`${id}-${title}`} />
                <h5>{title}</h5>
                <p>{price}</p>
                <button onClick={() => addToCart(product)}>Add</button>
                {/* <ItemCount stock={item.stock} id={item.id} set={setNuevoStock} new={nuevoStock} onAdd={onAdd}/> */}
            </div>
        </div>
    )
}