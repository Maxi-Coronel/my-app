import { Link } from "react-router-dom"
import { ItemCount } from "../../ItemCount/ItemCount"

export const Item = ({ product }) => {

    const {
        image,
        title,
        price,
        id
    } = product

    return(
        <div className='flex borderRad-5 tarjeta'>
            <div className='flex black presentacion' key={id}>
                <Link to={`/product/${id}`}>
                        <img className='img' src={image} alt={`${id}-${title}`} />
                    <h5>{title}</h5>
                    <p>{price}</p>
                    <ItemCount 
                    key={product.id}
                    product={product}/>
                </Link>
            </div>
        </div>
    )
}