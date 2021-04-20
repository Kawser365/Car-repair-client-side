import React from 'react';
import image from '../../../images/kasarin-naipongprasit-2gt1pXvqIEI-unsplash.jpg';
const AboutCompany = () => {
    return (
       <section>
           <div className="row">
               <div className="col-md-6 col-sm-6">
                   <img src={image} alt="" className="img-fluid"/>
               </div>
               <div className="col-md-6 col-sm-6">
                   <h1>About Our Car Company</h1>
                   <p>We’re Committed To AutoRepair Meets The Quality Standards</p>
                   <br/>
               </div>
           </div>
       </section>
    );
};

export default AboutCompany;