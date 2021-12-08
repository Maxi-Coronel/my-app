import { useDeletFromCart } from "../../context/ContextProduct"
export const CartList = ({ item }) => {

    const deletProduct = useDeletFromCart()

    const {
        title,
        image,
        price
    } = item

    return(
        <div>
            <img src={image} alt={title} className='img-miniatura'/>
            <span>{price}</span>
            <button onClick={() => deletProduct(item)}>X</button>
        </div>
    )
}