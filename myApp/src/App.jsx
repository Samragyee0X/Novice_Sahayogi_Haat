import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// Add at the top of App.js
import 'react-datepicker/dist/react-datepicker.css';
import './App.css'; // Your React-specific styles
const SahayogiHaat = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    activity: '',
    assistType: 'exam',
    offerPrice: ''
  });

  const categories = [
    { id: 'visual', label: 'Visually Impaired' },
    { id: 'handicap', label: 'Handicap' },
    { id: 'verbal', label: 'Verbally Impaired' },
    { id: 'hearing', label: 'Hearing Problem' },
    { id: 'others', label: 'Others' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, date: selectedDate });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="app-container">
      <header className="app-header">
        <h1>Sahayogi Haat</h1>
      </header>

      <div className="page-content">
        <p className="greetings">Hello User</p>
        
        <div className="ads-banner">
          {/* Ad content here */}
        </div>

        <h2>Select an option</h2>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img 
                src={`/assets/${category.id}.png`} 
                alt={category.label}
                className="category-icon"
              />
              <label htmlFor={category.id}>{category.label}</label>
            </div>
          ))}
        </div>

        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="activity"
              placeholder="Event"
              value={formData.activity}
              onChange={handleInputChange}
              className="form-input"
            />
            
            <select 
              name="assistType"
              value={formData.assistType}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="exam">Exams</option>
              <option value="Ride">Ride</option>
              <option value="take-out">Take me out</option>
              <option value="bring-me">Bring me ...</option>
              <option value="more">...</option>
            </select>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
              className="date-picker"
            />

            <div className="price-input-group">
              <input
                type="number"
                name="offerPrice"
                placeholder="Offer Price"
                value={formData.offerPrice}
                onChange={handleInputChange}
                className="form-input"
              />
              <span className="currency-symbol">Rs.</span>
            </div>

            <button type="submit" className="submit-button">
              Find Your Sathi
            </button>
          </div>
        </form>
      </div>

      <footer className="app-footer">
        {/* Footer content */}
      </footer>
    </section>
  );
};

export default SahayogiHaat;