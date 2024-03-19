import { createContext, useState } from "react";

export const CartContext = createContext(0)

function CartContextProvider({children}) {
    const [counter,setCounter]=useState(0)
    
    return ( 
        <CartContext.Provider value={{counter,setCounter}}>
            {children}
        </CartContext.Provider>
     );
}

export default CartContextProvider;