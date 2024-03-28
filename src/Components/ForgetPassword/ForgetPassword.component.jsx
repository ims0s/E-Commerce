import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {


    
    const [email,setEmail] = useState("")
    const [loading , setLoading]=useState(false)
    const nav = useNavigate()
    function emailChange(event){
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    function onSubmit(){
        setLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",{email})
        .then(res =>{
            
                toast.success(res.data?.message,{position:"top-center",duration:1500})
                sessionStorage.setItem("email",email)
                nav("/resetCode")
            
                
            
        }).catch(error => {
            toast.error("error occurred",{position:"top-center",duration:1500})
                setLoading(false)
        })
    }

    return (
        <>
            <div className="container py-5 my-5">
                <label htmlFor="Email" className="mb-1">Email:</label>
                <input onInput={emailChange} value={email}  className="form-control mb-3 "  placeholder="example@email.com" type="email" key="Email" />

                <button onClick={onSubmit} disabled={loading} className="btn btn-primary ">{loading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Submit"}</button>
            </div>
        </>
    );
}

export default ForgetPassword;