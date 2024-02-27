import { Link } from "react-router-dom";


function Products() {


    return (
        <>
            <div className="container py-2 ">
                <div className="row g-2 ">
                    <div className="col-md-2 product overflow-hidden p-3 rounded-3 ">
                        <Link to='/product-details'>
                            <img src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg" alt="" className="w-100" />
                            <p className="text-main"> anything</p>
                            <h5>anything</h5>
                            <div className="d-flex justify-content-between ">
                                <div><span>1200 EGP</span></div>
                                <div>
                                    4.5
                                    <i class="fa-solid fa-star rating-color ms-1 "></i>
                                </div>
                            </div>
                        </Link>
                        <button className="mt-2  btn bg-main text-white w-100 text-center ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;