import loadingStyle from "./ProductDetails.module.css"

function ProductDetailsLoading() {
    return ( 
        <>
            <div className="container pt-5 ">
                <div className="row g-4 ">
                    <div className="col-md-3 placeholder-wave ">
                        <img className={`${loadingStyle.img_aspect} placeholder `} alt="loading..." />
                    </div>
                    <div className="col-md-8 offset-md-1  ">
                        <div className="pt-5 placeholder-wave">
                            <p className="my-4 placeholder col-12 "></p>
                            <p className="my-4  text-black placeholder col-12 ">{}</p>
                            <p className="my-4 text-black-50 placeholder col-2  ">{}</p>
                            <div className="d-flex justify-content-between my-4">
                                <div className="col-2 placeholder "></div>
                                <div className="col-1 placeholder bg-warning ">
                                    
                                    <i className="fa-solid fa-star rating-color ms-1 "></i>
                                </div>
                            </div>
                            <button disabled className="btn bg-main text-white text-center w-100 placeholder "></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductDetailsLoading;