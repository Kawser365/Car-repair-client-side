import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Sidbar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import ProccessPayment from '../ProccessPayment/ProccessPayment';

const Order = () => {
    const {name} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://thawing-meadow-08220.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    const result =  services.filter(service=> service.name == name)
    const info = result.map(product => product.description)
    const onSubmit = data => {
        const orderData = {
            name: data.name,
            description: data.text
        };
    const products = {...loggedInUser, price:info, name:name}
        fetch('https://thawing-meadow-08220.herokuapp.com/orderService', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data){
                alert('order placed successfully');
            }
        })
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

            <div className="d-flex justify-content-center">

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Service Name</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} defaultValue={name} {...register("name")} />
                <br/><br/>
                <label>Service Coast</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} defaultValue={info} {...register("text")} />
                <br/><br/>
                <ProccessPayment></ProccessPayment>
                <br/>
                <input type="submit"/>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Order;