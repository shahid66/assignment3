import axios from 'axios';
import braintree from 'braintree-web';
import DropIn from 'braintree-web-drop-in-react';
import React, { useEffect, useState } from 'react';

const PaymentForm = ({ clientToken }) => {
  const [instance, setInstance] = useState(null);
  const [error, setError] = useState(null);
  const [nonce, setNonce] = useState(null);


  useEffect(() => {
    const initializeBraintree = async () => {
      try {
        const client = await braintree.client.create({ authorization: clientToken });
        const dropin = await braintree.dropin.create({
          authorization: clientToken,
          container: '#dropin-container'
        });
        setInstance(dropin);
      } catch (err) {
        setError(err);
      }
    };

    initializeBraintree();
    
  }, [clientToken]);



  const handlePayment = async () => {
    try {
      const { nonce: paymentMethodNonce } = await instance.requestPaymentMethod();
      setNonce(paymentMethodNonce);
      // Send the nonce to your server to complete the payment
    } catch (err) {
      setError(err);
    }
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <DropIn options={{}} instance={instance} />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default PaymentForm;
