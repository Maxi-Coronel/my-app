import {useState, useEffect} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { prodId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {

        const db = getFirestore();
        const ref = doc(db, 'products', prodId);
        getDoc(ref).then((snapshot)=>{

            setItem({
                id: snapshot.id,
                ...snapshot.data(),
            })
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