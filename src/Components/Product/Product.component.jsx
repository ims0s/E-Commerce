import { Link } from "react-router-dom";


function Product(props) {

    const {imageCover,price,ratingsAverage,title,category}=props.product;

    return (
        <>
            <div className="col-md-2 product overflow-hidden p-3 rounded-3 ">
                <Link to='/product-details'>
                    <img src={imageCover} alt="" className="w-100" />
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