import React, { useContext } from "react";
import Products from "../../context/ContextProduct";
import { ProductCard } from "../ProductCard/ProductCard";

const ProductsList = () => {

    const {products} = useContext(Products)

    return(
        <div className='flex-wrap'>
        {
            products?.map((product) => {
                return(
                    <ProductCard
                    key={product.id}
                    product={product} />                    
                )
            })
        }
        </div>
    )
}

export default ProductsList