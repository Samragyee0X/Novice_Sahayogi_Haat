import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProviderOrderDetails.css';

const ProviderOrderDetails = () => {
  const { state } = useLocation();
  const request = state?.request;

  return (
    <div className="apps">
      <header className="header">
        <h1>Order Details</h1>
        <h2>History Timeline</h2>
      </header>

      <div className="content">
        {request && (
          <>
            <p>This assistance has been booked for you on {new Date().toLocaleDateString()} for:</p>
            <div className="request-details">
              <h3>{request.title}</h3>
              <p>User: {request.user}</p>
              <p>Price: Rs.{request.price}</p>
              <p>Status: {request.status}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProviderOrderDetails;