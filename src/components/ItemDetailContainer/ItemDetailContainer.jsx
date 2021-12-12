import {useState, useEffect} from 'react'
import { productos } from '../Items/Items'
//import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const { prodId } = useParams()

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(false);
    const [irCart, setIrCart] = useState(false);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });

    const onAdd = (cantidad) => {
            console.log({...items, cantidad: cantidad});
            setIrCart(true)
            //props.setN(0);
    }
    
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
                                {/* <ItemDetail items={items} onAdd={onAdd} irCart={irCart}/> */}
                            </div>
                        </>
    )
}

export default ItemDetailContainer