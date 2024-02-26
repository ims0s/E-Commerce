import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup"

function Register() {
    const [errorMsg , setErrorMsg] = useState('')
    const userSchema = yup.object({
        name: yup.string().required().min(3).max(26),
        email: yup.string().email("invalid email address").required(),
        password: yup.string().min(6).max(16).required(),
        rePassword: yup.string().required().oneOf([yup.ref('password')], "must be same as password"),
        phone: yup.string().required().matches(/^01[0125][0-9]{8}$/, "must be an Egyptian phone number")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },
        onSubmit: (values) => {
            console.log(values)
            axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values).then(res => console.log(res)).catch(res => setErrorMsg(res.response.data.message))
        },
        validationSchema: userSchema

    })

    return (
        <>
            <div className="w-75 m-auto p-5">
                <h2>Register now :</h2>

                <form onSubmit={formik.handleSubmit}>

                    <label className="mt-2" htmlFor=""> Name:</label>
                    <input onBlur={formik.handleBlur} onInput={formik.handleChange} value={formik.values.name} type="text" id="name" placeholder="name" className={`form-control mb-2 ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`} />
                    {formik.errors.name && formik.touched.name ? <div className="alert alert-danger"> {formik.errors.name}</div> : ""}

                    <label className="mt-2" htmlFor=""> Email:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" placeholder="Email" className={`form-control mb-2 ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`} />
                    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> {formik.errors.email}</div> : ""}

                    <label className="mt-2" htmlFor=""> Phone:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id="phone" placeholder="Phone" className={`form-control mb-2 ${formik.errors.phone && formik.touched.phone ? 'is-invalid' : ''}`} />
                    {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger"> {formik.errors.phone}</div> : ""}

                    <label className="mt-2" htmlFor=""> Password:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id="password" placeholder="Password" className={`form-control mb-2 ${formik.errors.password  && formik.touched.password ? 'is-invalid' : ' '}`} />
                    {formik.errors.password && formik.touched.password ? <div className="alert alert-danger"> {formik.errors.password}</div> : ""}

                    <label className="mt-2" htmlFor=""> Re Password:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" id="rePassword" placeholder="Re Password" className={`form-control mb-2 ${formik.errors.rePassword && formik.touched.rePassword ? 'is-invalid' : ''}`} />
                    {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger"> {formik.errors.rePassword}</div> : ""}

                    <button disabled={!(formik.isValid&&formik.dirty) } onChange={formik.handleChange} value={formik.values.phone} type="submit" className="btn bg-main text-white ms-auto mt-2"> Register</button>

                </form>
                {errorMsg?<div className="alert alert-danger mt-2 "> {errorMsg}</div>:''}
            </div>
        </>
    );
}

export default Register;