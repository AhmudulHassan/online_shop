import React from 'react';
import "./Summary.css"
import { Link } from 'react-router-dom';

const Summary = (props) => {
    const cart=props.cart;
   //Using Reduce function
    // const totalPrice= cart.reduce((total, prd) => total+prd.price,0);

    // Using For loop
   let totalTaka=0;

   for(let i=0;i<cart.length;i++){
    const product =cart[i];
    totalTaka=totalTaka+product.price;

   }

 let shipping=0;

   if(totalTaka<=0){
    shipping=0;
   }
   
   else if(totalTaka<15){
    shipping=4.99
   }
   else if(totalTaka>35){
    shipping=0
   }

   const tax=(totalTaka/10).toFixed(2);

   const grandTotal=(totalTaka+shipping+Number(tax)).toFixed(2);
   


    
    return (
        <div className='summary-main'>
            <h1 className='bg-danger'>This is Cart</h1>
            <p>Order Summary : {cart.length} </p>
            <p>Total Price {totalTaka}</p>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax: {tax}</small></p>
            <p className='grand-total'>Grand Total:{grandTotal}</p>
            <br />
            <Link to='/review'>
               <button className="main-button">
                Review order
                </button> 
            </Link>

            
        </div>
    );
};

export default Summary;