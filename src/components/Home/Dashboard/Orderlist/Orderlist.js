import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidbar/Sidebar';

const Orderlist = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://thawing-meadow-08220.herokuapp.com/order?email='+loggedInUser.email)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h1 className="d-flex justify-content-center">Your Order List</h1>
            <div>
            {
                    orders.map(order=> <table class="table">
                    
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td>{order.name}</td>
                        <td>{order.description}</td>
                        </tr>
                    </tbody>
                    </table>)
            }
            </div>
            </div>
        </div>
    );
};

export default Orderlist;