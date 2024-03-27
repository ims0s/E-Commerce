import { useFormik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext.context";
import axios from "axios";
import toast from "react-hot-toast";

function Checkout() {
    const [loading,setLoading] = useState(false);
    const {cartId}=useContext(CartContext)
    console.log(cartId)
    let settings = {
        position: "bottom-right",
        duration: 2000
    }

    function payment (vals){
        setLoading(true)
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, vals, {
            headers:{
                token:localStorage.getItem("token")
            }
        }).then(res=>{
            console.log(res.data.session)
            window.location.href= res.data.session.url
        }).catch(err => {
            toast.error("Error ocurred !! ", settings)
            setLoading(false)
        })
    }

    let formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: payment
    })
    return <>
    <div className="container my-4 ">
        <form className="w-75 mx-auto " onSubmit={formik.handleSubmit}>
            <label htmlFor="details">Details</label>
            <input type="text"
                id='details'
                value={formik.values.details}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='form-control'
                name='details'

            />
            <label htmlFor="phone">phone</label>
            <input type="text"
                id='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='form-control  my-2'
                name='phone'
            />
            <label htmlFor="city">city</label>
            <input type="text"
                id='city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='form-control'
                name='city'
            />

            <button disabled={loading} type='submit' className=' my-3 btn text-white bg-main'>
            {loading?<i className="fa-solid fa-spinner fa-spin"></i>:"Pay Now"}                </button>
        </form>
    </div>

    </>
}

export default Checkout;