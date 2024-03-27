import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.context";

export const CartContext = createContext(0)



function CartContextProvider({children}) {

    const {token} = useContext(AuthContext);
    const [counter,setCounter]=useState(0);
    const [Products,setProducts]=useState([]);
    const [totalCartPrice,setTotalCartPrice]=useState(0)
    
    function getUserCart (){
        axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
            headers:{
                token:localStorage.getItem("token")
            }
        }).then(res=>res.data)
        .then(data => {
            setCounter(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalCartPrice(data.data.totalCartPrice)
        })
        .catch(err =>{
            console.log("err: ",err)
        })
    }
    useEffect(()=>{
        getUserCart();
    },[token])
    
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
        <CartContext.Provider value={{
            addProductToCart,
            counter , 
            Products,
            totalCartPrice,
            getUserCart,
            }}>
            {children}
        </CartContext.Provider>
     );
}

export default CartContextProvider;