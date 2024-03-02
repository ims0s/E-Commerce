import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product.component";
import ProductsLoading from "./ProductLoading.component";


function Products() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://ecommerce.routemisr.com/api/v1/products?limit=100')
        .then(res => res.data.data)
        .then(async (data) => {
            setProducts(data)
        })
    },[])
        
    return (
        <>
            <div className="container py-2 ">
                <div className="row g-2 ">
                    {products[0]?products.map(item => {
                        return <Product key={item._id} product={item} />
                    }):<ProductsLoading/>}
                </div>
            </div>
        </>
    );
}

export default Products;