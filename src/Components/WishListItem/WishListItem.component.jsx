import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext.context";
import toast from "react-hot-toast";
import { WishListContext } from "../../context/WishlistContext/WishListContext.context";

function WishListItem({product}) {
    const {addProductToCart, getUserCart}=useContext(CartContext)
    const [addLoading , setAddLoading]=useState(false);
    const [loading, setLoading]=useState(false)
    const {removeItemFromWishList , getUserWishList}=useContext(WishListContext)
    async function addProduct(){
        setAddLoading(true)
        const res = await addProductToCart(product._id);
        if(res.status==="success"){
            toast.success("Product Added Successfully!!",{
                position:"bottom-right",
                duration: 2000
            })
            getUserCart();
            
            setAddLoading(false);
        }else {
            toast.error("Error ocurred !!",{
                position:"bottom-right",
                duration:2000
            })
            setAddLoading(false);
        }
    }

    
    async function removeProduct(){
        setLoading(true)
        const res = await removeItemFromWishList(product._id);
        if(res.status==="success"){
            toast.success("Product Removed Successfully!!",{
                position:"bottom-right",
                duration: 2000
            })
            getUserWishList();
            
            setLoading(false);
        }else {
            toast.error("Error ocurred !!",{
                position:"bottom-right",
                duration:2000
            })
            setLoading(false);
        }
    }
    return ( 
        <>
        <div className="row align-items-center my-1">
            <div className="col-md-2">
                <figure className="">
                    <img src={product.imageCover} alt="" className="w-100 " />
                </figure>
            </div>
            <div className="col-md-8">
                <article>
                    <h3>Title: {product.title}</h3>
                    <h5>Price: {product.price}</h5>
                    <button disabled={loading} onClick={removeProduct}  className="btn btn-outline-danger">
                        {!loading?<><i className="fa-solid fa-trash"></i>
                        {" remove"}</>:<i className="fa-solid fa-spinner fa-spin"></i>}
                    </button>
                </article>
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" onClick={addProduct}>
                {!addLoading?"Add To Cart":<i className="fa-solid fa-spinner fa-spin"></i>}
                </button>
            </div>
        </div>
        <hr />
        </>
     );
}

export default WishListItem;