import React from 'react';
import './UserOrderDetails.css';

const user = {
  providerName: "John's Assistance Service",
  date: "2023-08-15",
  event: "exam support"
};

function UserOrder() {
  return (
    <div className="container">
      <header className="header">
        <h1>Order Details</h1>
        <h2>History Timeline</h2>
      </header>

      <div className="contents">
        <p className="booking-info">
          {user.providerName} has booked you on {user.date} for {user.event} purpose.
        </p>
      </div>
    </div>
  );
}

export default UserOrder;