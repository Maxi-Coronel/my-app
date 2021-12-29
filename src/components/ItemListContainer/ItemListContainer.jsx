import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Item } from "./Item/Item";

const ItemListContainer = () => {

    const { catId } = useParams();
    const [items, setItems] = useState([]);

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
            const categorias = prod.filter((i) => i.categoria === `${catId}`);
            catId === undefined ? setItems(prod) : setItems(categorias)
        })
    }, [catId])

    return(
        <div className='flex-wrap'>
        {
            items?.map((item) => {
                return(
                    <Item
                    key={item.id}
                    product={item} />
                )
            })
        }
        </div>
    )
}

export default ItemListContainer