import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';
import React, { useEffect, useState } from 'react';


const ClientToken = () => {
    const [clientToken, setClientToken] = useState(null);
    const getTokenApi=async()=>{
        const token= await axios.get(`http://localhost:5000/api/v1/client_token`);
        setClientToken(token.data.clientToken)
      }
      useEffect(() => {
        getTokenApi();
      }, []);
      return (
        <div>
          {clientToken ? (
            <DropIn
              options={{
                authorization: clientToken
              }}
            //   onInstance={instance => setDropInInstance(instance)}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      );
}

export default ClientToken