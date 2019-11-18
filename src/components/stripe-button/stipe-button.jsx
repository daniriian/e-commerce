import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_v6fht4PEqsHvF1TDp1M6k9eP00tqhIQbXq';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: 'priceForStripe',
        token
      }
    })
      .then(response => {
        alert('Payment Succesfull');
      })
      .catch(err => {
        console.log('Payment error: ', JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card information'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
