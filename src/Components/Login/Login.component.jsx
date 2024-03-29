import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { AuthContext } from "../../context/AuthContext/AuthContext.context";

function Login() {
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const { setToken } = useContext(AuthContext)
    const userSchema = yup.object({
        email: yup.string().email("invalid email address").required(),
    })
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            setLoading(true)
            axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).then(res => {
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                setToken(res.data.token)
                navigate('/home')
            }).catch(res => { setErrorMsg(res.response?.data.message); setLoading(false) })
        },
        validationSchema: userSchema

    })

    return (
        <>
            <div className="w-75 m-auto p-5">
                <h2>Login now :</h2>

                <form onSubmit={formik.handleSubmit}>


                    <label className="mt-2" htmlFor=""> Email:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" placeholder="Email" className={`form-control mb-2 ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`} />
                    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> {formik.errors.email}</div> : ""}


                    <label className="mt-2" htmlFor=""> Password:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id="password" placeholder="Password" className={`form-control mb-2 ${formik.errors.password && formik.touched.password ? 'is-invalid' : ' '}`} />

                    <button disabled={!(formik.isValid && formik.dirty)} onChange={formik.handleChange} value={formik.values.phone} type="submit" className="btn bg-main text-white ms-auto mt-2"> {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Login"}</button>
                </form>
                    <Link to="/forgetpassword">
                        <p className="text-end ">Forget Password?</p>
                    </Link>
                {errorMsg ? <div className="alert alert-danger mt-2 "> {errorMsg}</div> : ''}
            </div>
        </>
    );
}

export default Login;