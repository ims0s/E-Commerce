import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext.context";
import CartItem from "../CartItem/CartItem.component";


function Cart() {

    const {totalCartPrice,Products,counter} =useContext(CartContext);
    return (
        <>
            <div className="container bg-main-light">
                <h2 className="my-3">Shop Cart</h2>
                <h5>Number Of Items : {counter}</h5>
                <h5 className="my-3">Total Cart Price : {totalCartPrice} LE </h5>
                {Products.map(item =>{
                    const {count, product,price}= item

                    return <CartItem key={product._id} count={count} product={product} price={price} />
                })}
            </div>
        </>
    );
}

export default Cart;