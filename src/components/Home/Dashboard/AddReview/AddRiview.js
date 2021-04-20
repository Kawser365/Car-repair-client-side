import React, { useEffect, useState } from 'react';
import CustomerReviews from '../../CustomerReviews/CustomerReviews';

const AddRiview = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://thawing-meadow-08220.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div className="container">
            <div className="d-flex justify-content-center" style={{marginTop:'30px'}}>
            <h1>Our Customer Reviews</h1>
            </div>
            <div className="row">
                {
                    reviews.map(review =><CustomerReviews review={review}></CustomerReviews>)
                }
            </div>
        </div>
    );
};

export default AddRiview;