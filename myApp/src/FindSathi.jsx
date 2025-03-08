import React, { useState, useEffect } from 'react';
import './FindSathi.css'; // Create this CSS file

const FindSathi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sathiData, setSathiData] = useState(null);

  // Simulated API call
  useEffect(() => {
    const fetchSathi = async () => {
      try {
        // Simulated delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulated response - change this to test different states
        const mockResponse = {
          found: true,
          person: {
            name: 'Ramesh Shrestha',
            rating: '4.8 ★',
            totalNoofReviews: '26',
            experience: '5 years experience',
            skills: ['Exam Assistance', 'Mobility Support', 'Sign Language'],
            contact: 'ramesh@example.com'
          }
        };

        if (mockResponse.found) {
          setSathiData(mockResponse.person);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSathi();
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setSathiData(null);
    // Retry logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="find-sathi-page">
      <h1>Find Your Sathi</h1>
      
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Searching for available Sathi...</p>
        </div>
      ) : sathiData ? (
        <div className="sathi-card">
          <h2>{sathiData.name}</h2>
          <div className="sathi-details">
            <p className="rating">{sathiData.rating}</p>
            <p>Total Reviews: {sathiData.totalNoofReviews} </p>
            <p>{sathiData.experience}</p>
            <div className="skills">
              {sathiData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            <p className="contact">Contact: {sathiData.contact}</p>
          </div>
          <button className="connect-button">Connect Now</button>
        </div>
      ) : (
        <div className="no-sathi">
          <p>No available Sathi found at the moment 😞</p>
          <button onClick={handleRetry} className="retry-button">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default FindSathi;