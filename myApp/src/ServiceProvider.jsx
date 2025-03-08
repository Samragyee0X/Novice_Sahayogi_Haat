import React from 'react';
import './ServiceProvider.css';
import ServiceCard from './ServiceCard';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Our Services</h1>
        <div className="service-alert">
          <span>Service request alert</span>
          <button>See all</button>
        </div>
      </header>

      <div className="service-list">
        <ServiceCard
          name="Hari"
          rating="4.8 (2)"
          price="Rs.350"
          services={["Home", "speaker", "Search", "notification", "Customer name"]}
        />
        <ServiceCard
          name="Lalita"
          rating="4.0 (5)"
          price="Rs.500"
          services={["A", "B", "C", "D", "E", "F", "G", "H"]}
        />
      </div>
    </div>
  );
}

export default App;