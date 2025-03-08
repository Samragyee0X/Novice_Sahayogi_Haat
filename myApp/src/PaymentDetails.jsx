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
          <p>Pay with Khatti</p>
          <input type="radio" name="khalti" id="payment" />
        </div>
        <div className="option">
          <img src={cash} alt="cash" />
          <p>Pay with cash</p>
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