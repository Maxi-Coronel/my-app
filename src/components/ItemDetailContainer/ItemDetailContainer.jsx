import {useState, useEffect, useContext} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Products from '../../context/CartContext'

const ItemDetailContainer = () => {

    const { prodId } = useParams();
    const {products} = useContext(Products)
    const [item, setItem] = useState({});

    useEffect(() => {
        const traeProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
    
        traeProductos.then((res)=>{
            prodId ? setItem(res.find(item => item.id === prodId)) : 
            setItem(res);
        })
        
        .catch((error)=>{
            console.log(error);
        })
    }, [prodId, products])

    return (
        /* loading ?   <div className='flex divCargando'>
                            <h1>CASI LISTO...</h1>
                            <img className='cargando' src="https://th.bing.com/th/id/R.7500668d515374c0dd15a7ed1e8bdbd8?rik=KPncNUUV2lQfng&pid=ImgRaw&r=0" alt="cargando" />
                        </div>
                    :    */<>
                            <div className='flex'>
                                <ItemDetail
                                key={item.id}
                                product={item}/>
                            </div>
                        </>
    )
}

export default ItemDetailContainer