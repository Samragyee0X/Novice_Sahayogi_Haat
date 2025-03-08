import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from './context/AuthContext';
import Header from './header'; // Ensure correct path
import './App.css';
import Footer from './Footer';

// Import images
import visualImg from './assets/visual.png';
import handicapImg from './assets/handicap.png';
import verbalImg from './assets/verbal.png';
import hearingImg from './assets/hearing.png';
import othersImg from './assets/others.png';

const SahayogiHaat = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    activity: '',
    assistType: '', // Changed to empty string
    offerPrice: ''
  });

  const categories = [
    { id: 'visual', label: 'Visually Impaired', image: visualImg },
    { id: 'handicap', label: 'Handicap', image: handicapImg },
    { id: 'verbal', label: 'Verbally Impaired', image: verbalImg },
    { id: 'hearing', label: 'Hearing Problem', image: hearingImg },
    { id: 'others', label: 'Others', image: othersImg }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, date: selectedDate });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="user-greeting">
          {user && <p>Hey {user ? user.username : 'Guest'}, Welcome back!! You're logged in as a service seeker...</p>}
        </div>
        <div className="ads">
          <img src="ads.png" alt="ads" className="ads" />
        </div>
        <div className="categories-section">
          <h2>Select an option</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.id}>
                <img 
                  src={category.image} 
                  alt={category.label}
                  className="category-icon"
                />
                <label>{category.label}</label>
              </div>
            ))}
          </div>
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
              required
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="+2">Person with +2</option>
              <option value="Scribe">Scriber</option>
              <option value="Brailler">Brailler</option>
              <option value="Guide">Guide</option>
            </select>

            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
              className="date-picker"
            />

            <div className="price-input-group">
              <span className="currency-symbol">Rs</span>
              <input
                type="number"
                name="offerPrice"
                placeholder="Offer Price"
                value={formData.offerPrice}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-button">
              Find Your Sathi
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SahayogiHaat;