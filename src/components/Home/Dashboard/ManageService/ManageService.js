import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidbar/Sidebar';

const ManageService = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://thawing-meadow-08220.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    const deleteService = id=>{
        fetch(`https://thawing-meadow-08220.herokuapp.com/deleteService/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(result=>{
            console.log('delete successfully')
        })
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h1 className="d-flex justify-content-center">Manage Services</h1>
            <div>
            {
                    services.map(service=> <table class="table">
                    
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td>{service.name}</td>
                        <td>{service.description}</td>
                        <td> <button onClick={()=> deleteService(service._id)}>Delete</button> </td>
                        </tr>
                    </tbody>
                    </table>)
            }
            </div>
            </div>
        </div>
    );
};

export default ManageService;