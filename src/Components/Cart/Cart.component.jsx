import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext.context";
import CartItem from "../CartItem/CartItem.component";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Cart() {
    const [clearLoading, setClearLoading] = useState(false);
    const { totalCartPrice, Products, counter, clearCart,getUserCart } = useContext(CartContext);
    const nav = useNavigate();
    let settings = {
        position: "bottom-right",
        duration: 2000
    }
    async function clearMyCart() {
        setClearLoading(true)
        const res = await clearCart();
        if (res.message === "success") {
            toast.success("Cart Cleared !!", settings)
            getUserCart();
            nav("/home")
        } else {
            toast.error("Error ocurred !! ", settings)
        }
        setClearLoading(false)
    }
    return (
        <>

            <div className="container bg-main-light py-5 ">
                <h2 className="my-3">Shop Cart</h2>
                <h5>Number Of Items : {counter}</h5>
                <h5 className="my-3">Total Cart Price : {totalCartPrice} LE </h5>
                <div className="d-flex justify-content-between ">
                    {Products.length?<button onClick={clearMyCart} className=" my-3 btn btn-outline-danger " disabled={clearLoading} >{!clearLoading?"Clear Cart":<i className="fa-solid fa-spinner fa-spin"></i>}</button>
                    :""}
                    <button className="btn btn-primary my-3  " onClick={()=>{nav("/checkout")}}>Checkout</button>
                </div>
                {Products.map(item => {
                    const { count, product, price } = item

                    return <CartItem key={product._id} count={count} product={product} price={price} />
                })}
            </div>
        </>
    );
}

export default Cart;