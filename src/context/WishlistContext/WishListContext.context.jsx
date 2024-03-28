import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext.context";


export const WishListContext = createContext(0);


export default function WishListContextProvider({ children }) {

    const [Products,setProducts]=useState([]);
    const {token} = useContext(AuthContext);

    async function addProductToWishList(id){
        try{
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
                productId:id,
    
            }, {
                headers:{
                    token
                }
            })
            return data
        }catch(e){
            return e
        }
    }
     function getUserWishList(){
        axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers:{token}})
        .then(res =>{
            setProducts(res.data.data);
        })
        .catch(err =>{
            console.error("err: ",err)
            setProducts([]);
        })
    }

    async function removeItemFromWishList(id){
        try{
            const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
                headers:{
                    token
                }
            })
            return data
        }catch(e){
            return e
        }
    }

    useEffect(()=>{
        getUserWishList();
        // eslint-disable-next-line
    },[token])

    return (
    <WishListContext.Provider value={{
        Products,
        getUserWishList,
        addProductToWishList,
        removeItemFromWishList,

    }}>
        {children}
    </WishListContext.Provider>
    )
}