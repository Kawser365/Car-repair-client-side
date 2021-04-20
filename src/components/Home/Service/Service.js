import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {name,imageURL,description} = props.service
    return (

            <div className="col-md-4 col-sm-6">
                <div className="card" >
                <img src={imageURL} className="card-img-topv" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${description}</p>
                    <Link to={`/order/${name}`}><button className="btn btn-success">Booking your car</button></Link>
                </div>
                </div>
            </div>
      
    );
};

export default Service;