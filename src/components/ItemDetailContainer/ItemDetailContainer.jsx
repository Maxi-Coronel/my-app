import {useState, useEffect} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { prodId } = useParams();
    const [item, setItem] = useState({});
    const [isCart, setIsCart] = useState(false)

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, 'products', prodId);
        getDoc(ref).then((snapshot)=>{
            setItem({
                id: snapshot.id,
                ...snapshot.data(),
            })
            setIsCart(true)
        })
    }, [prodId])

    return (
            <>{
                isCart 
                ?<div className='flex'>
                    <ItemDetail
                    key={item.id}
                    product={item}/>
                </div>
                : <div className="w-100"><img className="loading" src="https://eposta.bandirma.edu.tr/Content/images/loading.gif" alt="Loading" /></div>
            }
            </>
    )
}

export default ItemDetailContainer