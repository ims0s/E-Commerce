import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(0)



function CartContextProvider({children}) {


    const [counter,setCounter]=useState(0);
    
    useEffect(()=>{
        axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
            headers:{
                token:localStorage.getItem("token")
            }
        }).then(res=>res.data).then(data => setCounter(data.numOfCartItems))
    },[])
    
    async function addProductToCart(id){
        try{
            const {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
                productId:id
            },{
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            return data
        }catch(e){
            return e 
        }
    }
    return ( 
        <CartContext.Provider value={{counter , setCounter , addProductToCart}}>
            {children}
        </CartContext.Provider>
     );
}

export default CartContextProvider;