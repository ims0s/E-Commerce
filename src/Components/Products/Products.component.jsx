import axios from "axios";
import Product from "../Product/Product.component";
import ProductsLoading from "./ProductLoading.component";
import { useQuery } from "react-query";


function Products() {

    function getProducts(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/products?limit=100')
    }

    let {data, isLoading} = useQuery('Products',getProducts , {
        cacheTime:5000
    })

    return (
        <>
            <div className="container py-2 ">
                <div className="row g-2 ">
                    {!isLoading?data.data.data.map(item => {
                        return <Product key={item._id} product={item} />
                    }):<ProductsLoading/>}
                </div>
            </div>
        </>
    );
}

export default Products;