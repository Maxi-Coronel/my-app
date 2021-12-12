import {useState, useEffect, useContext} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Products from '../../context/CartContext'

const ItemDetailContainer = () => {
    
    const { prodId } = useParams()
    
    const {products} = useContext(Products)

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(false);
    const [irCart, setIrCart] = useState(false);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    });
    
    useEffect(() => {
        setLoading(true)
        getItem.then((res)=>{
            prodId ? setItems(res.find(item => item.id === prodId)) : 
            setItems(res);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        loading ?   <div className='flex divCargando'>
                            <h1>CASI LISTO...</h1>
                            <img className='cargando' src="https://th.bing.com/th/id/R.7500668d515374c0dd15a7ed1e8bdbd8?rik=KPncNUUV2lQfng&pid=ImgRaw&r=0" alt="cargando" />
                        </div> 
                    :   <>
                            <div className='flex'>
                                <ItemDetail
                                key={items.id}
                                product={items}/>
                            </div>
                        </>
    )
}

export default ItemDetailContainer