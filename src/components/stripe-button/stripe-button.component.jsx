import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey =
      'pk_test_51GznX8IWrxOpuAWIEK1Yef46GD6d7UAMtgkzRD5R5yb2wbikBJCUtGhABHn65r5VLGnO0vke6N3XHDhXN8M2Yp0800i1sO5CPf';

   const onToken = token => {
      console.log(token);
      alert('Payment Successful');
   }

   return <StripeCheckout 
   label='Pay Now'
   name='Celia Shoppe'
   billingAddress
   shippingAddress
   image='https://svgshare.com/i/CUz.svg'
   description= {`your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}
   />;
};

export default StripeCheckoutButton;
