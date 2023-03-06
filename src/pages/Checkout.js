
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';
import React, { useState } from 'react';

const Checkout = () => {
    const [clientToken, setClientToken] = useState(null);
    const [dropInInstance, setDropInInstance] = useState(null);
    const getTokenApi=async()=>{
        const token= await axios.get(`http://localhost:5000/api/v1/client_token`);
        setClientToken(token.data.clientToken)
      }
      const total= localStorage.getItem('total')

      const handlePaymentSubmit = async () => {
        try {
          const { nonce } = await dropInInstance.requestPaymentMethod();
          console.log(nonce);
          // Send the nonce to the server for processing
        } catch (error) {
          console.error(error);
        }
      };
    //   useEffect(() => {
    //     getTokenApi();
    //   }, []);
    
  return (
    <div className='checkoutMain'>
        <div class="row">
				<form method="get">
					<div class="col-7 col">
						<h3 class="topborder"><span>Billing Details</span></h3>
						
						
						<div class="width50 padright">
							<label for="fname"> Name</label>
							<input type="text" name="name" id="fname" required/>
						</div>
						<div class="width50 padright">
							<label for="fname"> Email</label>
							<input type="email" name="email" id="fname" required/>
						</div>
						
						
						<label for="address">Address</label>
						<input type="text" name="address" id="address" required/>
						
						
						
						
						
						
						
						
					</div>
					<div class="col-5 col order">
						
						
						<div><h5>Order Total</h5>{total}</div>

						<div>
							<h3 class="topborder"><span>Payment Method</span></h3>
                            <button class="paymentForm_btn" onClick={getTokenApi}>Payment Form</button>
							{clientToken && (
      <div>
        <DropIn
          options={{
            authorization: clientToken
          }}
          onInstance={instance => setDropInInstance(instance)}
        />
        <button onClick={handlePaymentSubmit}>Pay</button>
      </div>
    ) }

						</div>
                        

						
						
						<input type="submit" name="submit" value="Place Order" class="redbutton"/>
					</div>
				</form>
		</div>
    </div>
  )
}

export default Checkout