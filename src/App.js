import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout/MainLayout';
import Register from "./Components/Register/Register.component"
import NotFound from './Components/NotFound/NotFound.component';
import Login from './Components/Login/Login.component';
import Products from './Components/Products/Products.component';
import Home from './Components/Home/Home.component';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const router = createBrowserRouter([
    {path:"/", element:<MainLayout  />  , children:[
        {index:true , element: <Home /> },
        {path:"home" , element:<Home />},
        {path:"register" , element: <Register /> },
        {path:"login" , element: <Login /> },
        {path:"products" , element: <Products />},
        {path:"*" , element: <NotFound /> },
    ]}
])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
