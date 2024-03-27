import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout/MainLayout';
import Register from "./Components/Register/Register.component"
import NotFound from './Components/NotFound/NotFound.component';
import Login from './Components/Login/Login.component';
import Products from './Components/Products/Products.component';
import Home from './Components/Home/Home.component';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails.component';
import CartContextProvider from './context/CartContext/CartContext.context';
import { Toaster } from 'react-hot-toast';
import Categories from './Components/Categories/Categories.component';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails.component';
import Brands from './Components/Brands/Brands.component';
import Cart from './Components/Cart/Cart.component';
import AuthContextProvider from './context/AuthContext/AuthContext.context';
import Checkout from './Components/Checkout/Checkout.component';
import AllOrders from './Components/AllOrders/AllOrders.component';

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
            { path: "categories", element: <Categories /> },
            { path: "categoryDetails/:id", element: <CategoryDetails /> },
            { path: "brands", element: <Brands /> },
            { path: "products", element: <Products /> },
            { path: 'productDetails/:productId', element: <ProductDetails /> },
            { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
            {path:"checkout",element:<ProtectedRoute><Checkout/></ProtectedRoute>},
            {path : "allorders" , element: <ProtectedRoute><AllOrders/></ProtectedRoute>},
            { path: "*", element: <NotFound /> },
        ]
    }
])

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <CartContextProvider>
                    <RouterProvider router={router} />
                </CartContextProvider>
            </AuthContextProvider>
            <Toaster />
        </div>
    );
}

export default App;
