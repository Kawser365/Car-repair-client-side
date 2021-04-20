import React from 'react';
import {Elements,CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51IiJLKCYS0TPgc4IPX2D6hSl6YdisuH5cLjhdzf4n6o9NlaQcOfrxAxfRY6pwS7sJtEIcnFC3Rt0UhVdvTEaxPJK00e7HgXHXS');
const ProccessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
         <CardElement
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
            />
        </Elements>
    );
};

export default ProccessPayment;