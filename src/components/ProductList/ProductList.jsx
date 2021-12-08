import React, { useContext } from "react";
import Products from "../../context/ContextProduct";
import { Item } from "../Item/Item";

const ProductsList = () => {

    const {products} = useContext(Products)

    return(
        <div className='flex-wrap'>
        {
            products?.map((product) => {
                return(
                    <Item
                    key={product.id}
                    product={product} />
                )
            })
        }
        </div>
    )
}

export default ProductsList