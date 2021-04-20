import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import Sidebar from '../Sidbar/Sidebar';

const DeleteServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://thawing-meadow-08220.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                    services.map(service=> <ManageService service={service}></ManageService>)
            }
            </div>
        </div>
    );
};

export default DeleteServices;