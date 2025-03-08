import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindSathi.css';

const FindSathi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sathiData, setSathiData] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSathi = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const mockResponse = {
          found: true,
          person: {
            name: 'Jenish Shrestha',
            rating: '4.8 ★',
            totalNoofReviews: '26',
            experience: '5 years experience',
            skills: ['Exam Assistance', 'Mobility Support', 'Sign Language', 'Bachelor Running'],
            contact: '+977-980-8766817'
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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      navigate('/Payment');
    }, 5000);
  };

  return (
    <div className="find-sathi-page">
      <h1>Find Your Sathi</h1>
      
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Searching for available Sathi...</p>
        </div>
      ) : isConnecting ? (
        <div className="connecting-container">
          <div className="loading-spinner"></div>
          <p>Waiting for acceptance from {sathiData?.name}...</p>
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
          <button className="connect-button" onClick={handleConnect}>Connect Now</button>
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