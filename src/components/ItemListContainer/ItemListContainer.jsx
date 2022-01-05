import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Item } from "./Item/Item";

const ItemListContainer = () => {

    const { catId } = useParams();
    const [items, setItems] = useState([]);
    const [isCart, setIsCart] = useState(false)

    useEffect(() => {

        const db = getFirestore();
        const ref = collection(db, 'products');
        setIsCart(false)
        getDocs(ref).then((snapshot)=>{
            const prod = snapshot.docs.map((doc) => {
                return(
                        {id: doc.id,
                        ...doc.data(),}
                )
            })
            const categorias = prod.filter((i) => i.categoria === `${catId}`);
            catId === undefined ? setItems(prod) : setItems(categorias)
            setIsCart(true)
        })
    }, [catId])

    return(
        <div className='flex-wrap'>
        {isCart ?
            items?.map((item) => {
                return(
                    <Item
                    key={item.id}
                    product={item} />
                )
            })
            : <div className="w-100"><img className="loading" src="https://eposta.bandirma.edu.tr/Content/images/loading.gif" alt="Loading" /></div>
        }
        </div>
    )
}

export default ItemListContainer