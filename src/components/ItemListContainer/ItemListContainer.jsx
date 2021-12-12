import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../context/CartContext";
import { Item } from "./Item/Item";

const ProductsList = () => {

    const {products} = useContext(Products)
    const [items, setItems] = useState([]);

    const { catId } = useParams();

    useEffect(() => {

        const traeProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
    
        traeProductos.then((res)=>{
            catId ? setItems(res.filter(item => item.categoria === catId)) : 
            setItems(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [catId, products])

    return(
        <div className='flex-wrap'>
        {
            items?.map((items) => {
                return(
                    <Item
                    key={items.id}
                    product={items} />
                )
            })
        }
        </div>
    )
}

export default ProductsList