import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(0);


 export default function AuthContextProvider({children}){

        const [token,setToken] = useState();

        useEffect(()=>{
            setToken(localStorage.getItem("token"))
        },[])


    return (
        <AuthContext.Provider value={{
            token,
            setToken
            }}>
            {children}
        </AuthContext.Provider>
    )

}