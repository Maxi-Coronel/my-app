import { ItemCount } from '../../ItemCount/ItemCount'

export const ItemDetail = ({ product }) => {

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
            <div className='divDetail'>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <h4>{tituloDescripcion}</h4>
                <p>{descripcion}</p>
                <div className="flex">
                    <p>Cantidad disponible: {stock}</p>
                    <div className="w-50"><ItemCount key={product.id} product={product}/></div>
                </div>
            </div>
        </div>
    )
}