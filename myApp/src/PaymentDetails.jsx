import React from 'react';
import './PaymentDetails.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Payment</h1>
      </header>

      <div className="payment-options">
        <div className="option">
          <p>Pay with Khatti</p>
        </div>
        <div className="option">
          <p>Pay with cash</p>
        </div>
      </div>
    </div>
  );
}

export default App;