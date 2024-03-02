import { useState } from "react";
import { Link } from "react-router-dom";
import ProductStyle from "./Product.module.css"

function Product(props) {

    const [placeholder,setPlaceholder] = useState(true);

    const {imageCover,price,ratingsAverage,title,category}=props.product;

    return (
        <>
            <div className="col-md-2 product overflow-hidden p-3 rounded-3 ">
                <Link to='/product-details'>
                    <div className={placeholder?"placeholder-wave":""}>
                    <img src={imageCover} onLoad={()=>setPlaceholder(false)}   alt="" className={`${ProductStyle.img_aspect } ${placeholder?"placeholder":""} `}/>

                    </div>
                    <p className="text-main"> {category.name}</p>
                    <h5>{title.split(" ").splice(0,2).join(" ")}</h5>
                    <div className="d-flex justify-content-between ">
                        <div><span>{price} EGP</span></div>
                        <div>
                            {ratingsAverage}
                            <i className="fa-solid fa-star rating-color ms-1 "></i>
                        </div>
                    </div>
                </Link>
                <button className="mt-2  btn bg-main text-white w-100 text-center ">Add To Cart</button>
            </div>
        </>
    );
}

export default Product;