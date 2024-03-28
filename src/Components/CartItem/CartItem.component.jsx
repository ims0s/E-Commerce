import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext.context";
import toast from "react-hot-toast";

function CartItem(props) {
    const { count, product, price } = props
    const [loading , setLoading] = useState(false)
    const { updateItemCounts, getUserCart, removeItems  } = useContext(CartContext);

    let settings = {
        position: "bottom-right",
        duration: 2000
    }
    async function updateCount(count) {
        if (count > 0) {
            const res = await updateItemCounts(product._id, count)
            if (res.status === "success") {
                toast.success("Item Qty Updated !!", settings)
                getUserCart();

            } else {
                toast.error("Error ocurred !! ", settings)
            }

        } else {
            removeItem();
        }
    }

    async function removeItem() {
        setLoading(true)
        const res = await removeItems(product._id)
        if (res.status === "success") {
            toast.success("Item Removed !!", settings)
            getUserCart();
            
        } else {
            toast.error("Error ocurred !! ", settings)
        }
        setLoading(false)
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
                    <h5>Price: {price}</h5>
                    <h5 className="text-main">Total Price : {price * count}</h5>
                    <button disabled={loading} onClick={removeItem} className="btn btn-outline-danger">
                        {!loading?<><i className="fa-solid fa-trash"></i>
                        {" remove"}</>:<i className="fa-solid fa-spinner fa-spin"></i>}
                    </button>
                </article>
            </div>
            <div className="col-md-2">
                <div className="d-flex gap-3 align-items-center ">
                    <button onClick={() => updateCount(count - 1)} className="btn btn-outline-success">-</button>
                    <p className="m-0">{count}</p>
                    <button onClick={() => updateCount(count + 1)} className="btn btn-outline-success">+</button>

                </div>
            </div>
        </div>
        <hr />
    </>
);
}

export default CartItem;