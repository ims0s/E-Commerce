function CartItem(props) {
    const {count , product, price} = props
    return (
        <>
            <div className="row align-items-center my-1">
                <div className="col-md-2">
                    <figure className="">
                        <img src={product.imageCover} alt="" className="w-100 " />
                    </figure>
                </div>
                <div className="col-md-8">
                    <article>
                        <h3>Title: {product.title}</h3>
                        <h5>Price: {price}</h5>
                        <h5 className="text-main">Total Price : {price*count}</h5>
                        <button className="btn btn-outline-danger">
                            <i className="fa-solid fa-trash"></i>
                            {" remove"}
                        </button>
                    </article>
                </div>
                <div className="col-md-2">
                    <div className="d-flex gap-3 align-items-center ">
                        <button className="btn btn-outline-success">+</button>
                        <p className="m-0">{count}</p>
                        <button className="btn btn-outline-success">-</button>
                        
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default CartItem;