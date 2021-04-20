import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';


const AddServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://thawing-meadow-08220.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">OUR SERVICES</h1>
            <div className="row">
                {
                    services.map(service=><Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AddServices;