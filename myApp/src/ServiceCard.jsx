import React from 'react';
import './ServiceCard.css';

function ServiceCard({ name, rating, price, services }) {
  return (
    <div className="service-card">
      <div className="service-header">
        <h2>{name}</h2>
        <span>{rating}</span>
      </div>
      <div className="service-price">{price}</div>
      <div className="service-actions">
        <button>ACCEPT</button>
      </div>
      <div className="service-details">
        {services.map((service, index) => (
          <span key={index}>{service}</span>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;