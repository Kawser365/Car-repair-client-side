import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import AddRiview from '../Dashboard/AddReview/AddRiview';
import Reviews from '../Dashboard/Reviews/Reviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutCompany></AboutCompany>
            <Footer></Footer>
        </div>
    );
};

export default Home;