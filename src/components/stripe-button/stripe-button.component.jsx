import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // const publishableKey = process.env.STRIPE_PUBLISH_KEY;
  
  // Test Key
const publishableKey = 'pk_test_51Kcd0fSDtVxQpSIIXncH8dO0zWyyhTCBKRUCpRtgQllp6nwc5D0rGrlU7UGNkxy76j4YY13TqhriU3QTeaxQ5Ujx00lz1v18e5';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
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