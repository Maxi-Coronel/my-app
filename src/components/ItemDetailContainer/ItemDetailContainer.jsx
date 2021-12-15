import {useState, useEffect} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { prodId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {

        const db = getFirestore();
        const ref = collection(db, 'products');
        getDocs(ref).then((snapshot)=>{
            
            const prod = snapshot.docs.map((doc) => {
                return(
                        {id: doc.id,
                        ...doc.data(),}
                )
            })
            const produc = prod.find((i) => i.id === `${prodId}`);
            prodId === undefined ? setItem(prod) : setItem(produc)
        })
    }, [prodId])

    return (
            <>
                <div className='flex'>
                    <ItemDetail
                    key={item.id}
                    product={item}/>
                </div>
            </>
    )
}

export default ItemDetailContainer