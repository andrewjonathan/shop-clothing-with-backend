import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9xMQuqnU2y9KmSQTCsvcBZnG00PvSUm6Wj';
    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='SHOP Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;