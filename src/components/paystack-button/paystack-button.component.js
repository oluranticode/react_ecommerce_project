import React from 'react';
 import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';

const PaystackCheckoutButton = ({ price }) => {
    const priceForPaystack = price * 1;
    const PublishKey = "pk_live_248b643c0d65c42113af26dca725f56e866f53a4";
   const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }
    return (
        <div>  
            <PaystackButton 
                label='Pay Now!'
                name='OLU SHOP'
                email= 'alukotemitope49@gmail.com'
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is #${price}`}
                amount={priceForPaystack}
                panelLabel='Pay Now'
                token={onToken}
                paystackkey={PublishKey}
            />
           </div>
    );
};

export default PaystackCheckoutButton;
