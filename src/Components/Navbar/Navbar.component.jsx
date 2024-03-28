import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg"
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext.context";
import { WishListContext } from "../../context/WishlistContext/WishListContext.context";

function Navbar() {
    const { counter } = useContext(CartContext)
    const {Products} = useContext(WishListContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="fresh card logo" className="w-100" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/brands">Brands</Link>
                            </li>
                            {token?<li className="nav-item "> 
                                <Link className="nav-link " to="/allorders" >Orders</Link>
                            </li>
                            :""}
                            
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {token ? <>
                                <li className="nav-item">
                                    <span className="nav-link cursor-pointer" onClick={logout}>Logout </span>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/cart">
                                        <i className="fa-solid fa-cart-shopping position-relative fs-3 ">
                                            {
                                                counter ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-badge">
                                                    {counter}
                                                    <span className="visually-hidden">unread messages</span>
                                                </span> : ""
                                            }

                                        </i>
                                    </Link>
                                </li>
                                <li className="nav-item  ">
                                    <Link className="nav-link" to="/wishlist"><i className={`fa-solid fa-heart fs-3 ${Products[0]?"text-danger":"" }`}></i></Link>
                                </li>
                            </>
                                : <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;