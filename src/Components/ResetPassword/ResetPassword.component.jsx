import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import { AuthContext } from "../../context/AuthContext/AuthContext.context";

function ResetPassword() {
    const navigate = useNavigate();
    const {setToken}=useContext(AuthContext)
    useEffect(()=>{
        if(!sessionStorage.getItem("email")){
            navigate("/login")
        }
        // eslint-disable-next-line
    },[])

    const userSchema = yup.object({
        password: yup.string().min(6).max(16).required(),
        rePassword: yup.string().required().oneOf([yup.ref('password')], "must be same as password"),
    })

    const formik = useFormik({
        initialValues: {
            email:sessionStorage.getItem("email"),
            password: '',
            rePassword: '',
        },
        onSubmit: (values) => {
            axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",values)
        .then(res =>{
            
                toast.success("Password Reset Successfully",{position:"top-center",duration:1500})
                sessionStorage.removeItem("email")
                localStorage.setItem("token",res.data.token)
                setToken(res.data.token)
                navigate("/")
            
                
            
        }).catch(error => {
            toast.error(error.response.data.message,{position:"top-center",duration:1500})
                
        })
        },
        validationSchema: userSchema

    })

    return (
        <>

            <div className="container">
                <div className="w-75 m-auto p-5">
                    <h2>Reset Password :</h2>

                    <form onSubmit={formik.handleSubmit}>

                        <label className="mt-2" htmlFor=""> Password:</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id="password" placeholder="Password" className={`form-control mb-2 ${formik.errors.password && formik.touched.password ? 'is-invalid' : ' '}`} />
                        {formik.errors.password && formik.touched.password ? <div className="alert alert-danger"> {formik.errors.password}</div> : ""}

                        <label className="mt-2" htmlFor=""> Re Password:</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" id="rePassword" placeholder="Re Password" className={`form-control mb-2 ${formik.errors.rePassword && formik.touched.rePassword ? 'is-invalid' : ''}`} />
                        {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger"> {formik.errors.rePassword}</div> : ""}

                        <button disabled={!(formik.isValid && formik.dirty)} onChange={formik.handleChange} value={formik.values.phone} type="submit" className="btn bg-main text-white ms-auto mt-2"> Register</button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;