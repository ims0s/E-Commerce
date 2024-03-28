import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function ResetCode() {
    const nav = useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem("email")){
            
            nav("/login")
        }
        // eslint-disable-next-line
    },[])
    const [code,setCode] = useState("")
    const [loading , setLoading]=useState(false)

    function codeChange(event){
        setCode(event.target.value)
        console.log(event.target.value)
    }

    function onSubmit(){
        setLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",{resetCode:code})
        .then(res =>{
            
                toast.success(res.data?.status,{position:"top-center",duration:1500})
                nav("/resetpassword")
            
                
            
        }).catch(error => {
            console.log(error)
            toast.error(error.response.data?.message,{position:"top-center",duration:3000})
                setLoading(false)
        })
    }

    return (
        <>
            <div className="container py-5 my-5">
                <label htmlFor="code" className="mb-1">Reset Code</label>
                <input onInput={codeChange} value={code}  className="form-control mb-3 "  type="text" key="code" />

                <button onClick={onSubmit} disabled={loading} className="btn btn-primary ">{loading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Submit"}</button>
            </div>
        </>
    );
}

export default ResetCode;