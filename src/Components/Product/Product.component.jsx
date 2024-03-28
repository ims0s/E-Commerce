import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductStyle from "./Product.module.css"
import { CartContext } from "../../context/CartContext/CartContext.context";
import toast from "react-hot-toast";
import { WishListContext } from "../../context/WishlistContext/WishListContext.context";

function Product(props) {

    const { addProductToCart, getUserCart } = useContext(CartContext)
    const {addProductToWishList,Products,getUserWishList}=useContext(WishListContext)
    const [loading, setLoading] = useState(false)
    const [ fav, setFav ] = useState(false);
    const [placeholder, setPlaceholder] = useState(true);
    const { _id, imageCover, price, ratingsAverage, title, category } = props.product;

    async function addProduct() {
        setLoading(true)
        const res = await addProductToCart(_id);
        if (res.status === "success") {
            toast.success("Product Added Successfully!!", {
                position: "bottom-right",
                duration: 2000
            })
            getUserCart();

            setLoading(false)
        } else {
            toast.error("Error ocurred !!", {
                position: "bottom-right",
                duration: 2000
            })
            setLoading(false)
        }
    }

    async function addToWishList(){
        
        const res = await addProductToWishList(_id);
        if (res.status === "success") {
            toast.success("Product Added Successfully!!", {
                position: "bottom-right",
                duration: 2000
            })
            getUserWishList();

            
        } else {
            toast.error("Error ocurred !!", {
                position: "bottom-right",
                duration: 2000
            })
            
        }
    }

    useEffect(()=>{
        Products.forEach(item => {
            if(item._id===_id){
                setFav(true);
            }
        })
    })

    

    return (
        <>
            <div className="col-md-2 product overflow-hidden p-3 rounded-3 position-relative  ">
                <Link to={'/productDetails/' + _id}>
                    <div className={placeholder ? "placeholder-wave" : ""}>
                        <img src={imageCover} onLoad={() => setPlaceholder(false)} alt="" className={`${ProductStyle.img_aspect} ${placeholder ? "placeholder" : ""} `} />

                    </div>
                    <p className="text-main"> {category.name}</p>
                    <h5>{title.split(" ").splice(0, 2).join(" ")}</h5>
                    <div className="d-flex justify-content-between ">
                        <div><span>{price} EGP</span></div>
                        <div>
                            {ratingsAverage}
                            <i className="fa-solid fa-star rating-color ms-1 "></i>
                        </div>
                    </div>
                </Link>
                <button onClick={addToWishList} className="btn position-absolute fav-btn"><i className={` fa-heart fs-3 ${fav?"text-danger fa-solid ":"fa-regular"} `}></i></button>
                <button onClick={addProduct} disabled={loading} className="btn btn-product bg-main text-white text-center w-100">{!loading ? "Add To Cart" : <i className="fa-solid fa-spinner fa-spin"></i>}</button>
            </div>
        </>
    );
}

export default Product;