import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Watch } from 'react-loader-spinner';

export default function AllOrders() {


    const [userOrder, setUserOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    useEffect(() => {
        const res = jwtDecode(localStorage.getItem("token"));

        getUserOrder(res.id);
    }, []);



    async function getUserOrder(id) {

        try {
            const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
            setUserOrder(data);
        } catch (error) {
            console.error('Error fetching user orders:', error);

            setError('Error fetching user orders. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Watch height={80} width={80} radius={48} color="#4fa94d" ariaLabel="watch-loading" />
            </div>
        );
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    return (
        <div className="row">
            {userOrder.map((order) => (
                <div key={order._id} className="col-md-8 m-auto mt-5">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-3">
                        <p>Total Price: {order.totalOrderPrice}</p>
                        <p>Payment: {order.paymentMethodType}</p>
                        <p>Payment: {order.updatedAt}</p>
                        {order.cartItems.map((item) => (
                            <div key={item._id} className="container">
                                <div className="row">
                                    <div className="col-md-12 bg-success bg-opacity-10 align-items-center p-3 rounded-3 g-2 d-flex justify-content-evenly">
                                        <div className="">
                                            <img src={item.product.imageCover} className="w-25" alt="" />
                                            <h3>{item.product.title.split(' ').slice(0, 2).join(' ')}</h3>
                                        </div>
                                        <div className="bd-info">
                                            <h3>count: {item.count}</h3>
                                            <h3>Price: {item.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}