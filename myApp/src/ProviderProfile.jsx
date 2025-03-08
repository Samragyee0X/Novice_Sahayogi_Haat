import React from 'react';
import './ProviderPersonalinfo.css';

const ServiceCard = ({ name, rating, price, accent, speaker, notification }) => (
  <div className="service-card">
    <div className="service-header">
      <h3>{name} Requesting Service</h3>
      <span>{rating} ({Math.floor(Math.random() * 10)})</span>
    </div>
    <div className="service-price">Rs.{price}</div>
    <div className="service-details">
      <div><strong>Accent</strong> {accent}</div>
      <div><strong>Speaker</strong> {speaker}</div>
      <div><strong>Notification</strong> {notification}</div>
    </div>
  </div>
);

const Services = () => (
  <div className="services-container">
    <h1>Our Services</h1>
    <h2>exam assistance</h2>
    <p>find your <strong>saathi</strong></p>
    <h3>Service request alert</h3>
    <p>See all</p>
    <ServiceCard
      name="Hari"
      rating="4.8"
      price="350"
      accent="Home"
      speaker="Search"
      notification="Customer"
    />
    <ServiceCard
      name="Lalita"
      rating="4.0"
      price="500"
      accent="Home"
      speaker="Search"
      notification="Customer"
    />
  </div>
);

export default Services;