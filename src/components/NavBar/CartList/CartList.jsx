import { useDeletFromCart } from "../../../context/CartContext"

export const CartList = ({ item }) => {

    const deletProduct = useDeletFromCart()

    const {
        title,
        image,
        price,
        quantityCart
    } = item

    return(
        <div>
            <img src={image} alt={title} className='img-miniatura'/>
            <span>{price}</span>
            <span className="pad-5">{quantityCart}</span>
            <button onClick={() => deletProduct(item)}>X</button>
        </div>
    )
}