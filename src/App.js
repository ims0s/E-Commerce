import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout/MainLayout';
import Register from "./Components/Register/Register.component"
import NotFound from './Components/NotFound/NotFound.component';
import Login from './Components/Login/Login.component';
import Products from './Components/Products/Products.component';
import Home from './Components/Home/Home.component';
// import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails.component';
import CartContextProvider from './context/CartContext/CartContext.context';

const router = createBrowserRouter([
    {path:"/", element:<MainLayout  />  , children:[
        {index:true , element: <Home /> },
        {path:"home" , element:<Home />},
        {path:"register" , element: <Register /> },
        {path:"login" , element: <Login /> },
        {path:"products" , element: <Products />},
        {path:'productDetails/:productId', element: <ProductDetails />},
        {path:"*" , element: <NotFound /> },
    ]}
])

function App() {
    return (
        <div className="App">
            <CartContextProvider>
                <RouterProvider router={router} />
            </CartContextProvider>
        </div>
    );
}

export default App;
