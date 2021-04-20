import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor:'#f1f2f6'}}>
            <div className="row"  style={{paddingTop:'20px'}}>
                <div className="col-md-3 col-sm-4 offset-md-1">
                    <h3>OUR SERVICES</h3>
                    <br/>
                    <li>Car Oil Change</li>
                    <li>Purchase Inspection</li>
                    <li>Auto Diagnostics</li>
                    <li>Battery Problems</li>
                    <li>Engine Repair</li>
                </div>
                <div className="col-md-4 col-sm-4">
                   <h3>ABOUT COMPANY</h3>
                   <br/>
                    <li>About Cardan</li>
                    <li>Fleet Maintenance</li>
                    <li>Get a Career</li>
                    <li>Service Areas</li>
                    <li>Free Estimates</li> 
                </div>
                <div className="col-md-4 col-sm-4">
                    <h3>GET IN TOUCH</h3>
                    <h5>For Repair Support</h5>
                    <h5>+1 (810) 799 4660 / 5660</h5>
                    <br/>
                    <h5>The Working Hours</h5>
                    <h5>Mon - Sat 9am to 7pm</h5>
                    <br/>
                    <h5>Send Us Email</h5>
                    <h5>repair@my-domain.com</h5>
                </div>
            </div>
            <br/>
            <hr/>
            <div className=" d-flex justify-content-center">
            <h6>(c) 2021 KAWSER - Auto Repair Services. All rights reserved.</h6>
            </div>
        </footer>
    );
};

export default Footer;