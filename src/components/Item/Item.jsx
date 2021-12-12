
import { ItemCount } from "../ItemCount/ItemCount"

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
                    <img className='img' src={image} alt={`${id}-${title}`} />
                <h5>{title}</h5>
                <p>{price}</p>
                <ItemCount 
                key={product.id}
                product={product}/>
                {/* <ItemCount stock={item.stock} id={item.id} set={setNuevoStock} new={nuevoStock} onAdd={onAdd}/> */}
            </div>
        </div>
    )
}