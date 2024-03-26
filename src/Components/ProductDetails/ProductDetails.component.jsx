import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsLoading from "./ProductDetailsLoading.component";
import loadingStyle from "./ProductDetails.module.css"
import { CartContext } from "../../context/CartContext/CartContext.context";
import toast from "react-hot-toast";
function ProductDetails() {
    const [product, setProduct] = useState(null)
    const [loading,setLoading] = useState(false);
    const { productId } = useParams();
    const {addProductToCart , setCounter} = useContext(CartContext)
    useEffect(() => {
        axios.get('https://ecommerce.routemisr.com/api/v1/products/' + productId)
            .then(res => res.data.data)
            .then(data => setProduct(data))
    }, [productId])

    async function addProduct(){
        setLoading(true)
        const res = await addProductToCart(productId);
        if(res.status==="success"){
            toast.success("Product Added Successfully!!",{
                position:"top-right",
                duration: 2000
            })
            setCounter(res.numOfCartItems)
            
            setLoading(false)
        }else {
            toast.error("Error ocurred !!",{
                position:"top-right",
                duration:2000
            })
            setLoading(false)
        }
    }

    if (product) return (
        <>
            <div className="container pt-5 ">
                <div className="row g-4 ">
                    <div className="col-md-3">
                        <img  className={loadingStyle.img_aspect} src={product.imageCover} alt="loading image" />
                    </div>
                    <div className="col-md-8 offset-md-1 ">
                        <div className="pt-5">
                            <h3 className="my-4 ">{product.title}</h3>
                            <p className="my-4  text-black ">{product.description}</p>
                            <p className="my-4 text-black-50 ">{product.category.name}</p>
                            <div className="d-flex justify-content-between my-4">
                                <div>{product.price} EGP</div>
                                <div>
                                    {product.ratingsAverage}
                                    <i className="fa-solid fa-star rating-color ms-1 "></i>
                                </div>
                            </div>
                            <button onClick={addProduct} disabled={loading} className="btn bg-main text-white text-center w-100">{!loading?"Add To Cart":<i className="fa-solid fa-spinner fa-spin"></i>}</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    return <>
    <ProductDetailsLoading />
    </>
}

export default ProductDetails;