import React from 'react';
import image from '../../../images/engine.jpg'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>This is our  <br/> Car repair company</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla quidem, eius placeat dicta necessitatibus.</p>
                <div className="btn btn-danger">Repair your car</div>
            </div>
            <div className="col-md-6">
               <img src={image} alt="" className="img-fluid"/> 
            </div>
        </main>
    );
};

export default HeaderMain;