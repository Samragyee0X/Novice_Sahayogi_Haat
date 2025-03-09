import React from 'react';
import './PaymentDetails.css';
import { IoIosArrowBack } from "react-icons/io";
import khalti from './assets/khalti.png'
import cash from './assets/cash.png'
function PaymentDetails() {

  return (
    <div className="payment">
      <div className="header">
        <div className="head-element">
          <IoIosArrowBack />
        </div>
        <div className="head-element">
          Payment
        </div>
        <hr />
      </div>

      <div className="payment-options">
        <div className="option">
          <img src={khalti} alt="khalti" />
          <strong><p>Pay with Khalti</p></strong>
          <input type="radio" name="khalti" id="payment" />
        </div>
        <div className="option">
          <img src={cash} alt="cash" />
         <strong><p>Pay with Cash</p></strong> 
          <input type="radio" name="cash" id="payment" />
        </div>
      </div>
      <div className="done">
        Done
      </div>
    </div>
  );
}

export default PaymentDetails;