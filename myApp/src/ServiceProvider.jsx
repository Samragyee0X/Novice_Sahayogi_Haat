import React from 'react';
import './Provider.css';

const Services = () => {
  const services = [
    {
      title: "Host Requesting Service",
      rating: 4.8,
      reviews: 2,
      price: 350
    },
    {
      title: "Last Requesting Service",
      rating: 4.0,
      reviews: 5,
      price: 500
    },
    {
      title: "Status"
    }
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <div className="service-title">{service.title}</div>
          
          {service.rating !== undefined && (
            <div className="service-details">
              <div className="rating">
                <span className="rating-value">{service.rating}</span>
                <span className="reviews">({service.reviews})</span>
              </div>
              <div className="price">Rs.{service.price}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;