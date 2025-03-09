import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from './context/AuthContext';
import Header from './header';
import './App.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

// Import images
import visualImg from './assets/visual.png';
import handicapImg from './assets/handicap.png';
import verbalImg from './assets/verbal.png';
import hearingImg from './assets/hearing.png';
import othersImg from './assets/others.png';
import examIcon from './assets/exam.png';
import sathiIcon from './assets/friend.png';
import comingSoonIcon from './assets/comingSoon.png';
import chatboxIcon from './assets/chatbox.png';

const SahayogiHaat = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    activity: '',
    assistType: '',
    offerPrice: ''
  });
  const navigate = useNavigate();
  const categories = [
    { id: 'visual', label: 'Visually Impaired', image: visualImg },
    { id: 'handicap', label: 'Handicap', image: handicapImg },
    { id: 'verbal', label: 'Verbally Impaired', image: verbalImg },
    { id: 'hearing', label: 'Hearing Problem', image: hearingImg },
    { id: 'others', label: 'Others', image: othersImg }
  ];

  const services = [
    { id: 'exam', icon: examIcon, text: 'Exam assistance' },
    { id: 'sathi', icon: sathiIcon, text: 'Find your saathi' },
    { id: 'comingSoon', icon: comingSoonIcon, text: 'Other Services Coming soon' }
  ];

  const handleCategorySelect = (id) => {
    setSelectedCategory(selectedCategory === id ? null : id);
  };

  const handleServiceSelect = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory || !selectedService) {
      alert('Please select both a category and a service.');
      return;
    }
    console.log({ ...formData, date: selectedDate, category: selectedCategory, service: selectedService });
    navigate('/FindSathi');
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
          {user && <p>Hey {user.username}, Welcome back!! You're logged in as a service seeker...</p>}
        </div>

        <div className="ads">
         <marquee><img src="ads.png" alt="In-app Advertising Market" className="ads" /></marquee> 
        </div>

        <div className="categories-section">
          <h2 className='serv'>Select an option</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <img src={category.image} alt={category.label} className="category-icon" />
                <label>{category.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="chatbox">
          <img src={chatboxIcon} alt="chatBox" className='chat'/>
        </div>
        <div className="services">
          <h3 className='serv'>Our Services</h3>
          <div className="service">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-item ${selectedService === service.id ? 'selected' : ''}`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <img src={service.icon} alt={service.text} className='service-img' />
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>

<br></br>
<br></br>
<br></br>
        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="activity"
              placeholder="More detail about Event"
              value={formData.activity}
              onChange={handleInputChange}
              className="form-input"
            /><br></br>

            <select
              name="assistType"
              value={formData.assistType}
              onChange={handleInputChange}
              className="form-select"
              required
            >
              <option value="" disabled hidden>
                Select an option for your companion
              </option>
              <option value="+2">Person with +2</option>
              <option value="Scribe">Scriber</option>
              <option value="Brailler">Brailler</option>
              <option value="Guide">Guide</option>
            </select>
            <label className='note'>Note: The assistant's level must be lower than that of yours for exam giving.</label>
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
              className="date-picker"
              required
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
                required
              />

            </div>
            <div className="button" onClick={handleSubmit}>
              Find your sathi
            </div>
          </div>
        </form>
        <br>
        </br>
        <br>
        </br>
        <div className="chatbox">
          <img src={chatboxIcon} alt="chatBox" className='chat'/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SahayogiHaat;