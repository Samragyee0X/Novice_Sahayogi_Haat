import React, { useState } from 'react';
import './Provider.css';
import { useAuth } from './context/AuthContext';
import Header from './header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

import examIcon from './assets/exam.png';
import sathiIcon from './assets/friend.png';
import comingSoonIcon from './assets/comingSoon.png';
import chatboxIcon from './assets/chatbox.png';

const Providers = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedServices, setSelectedServices] = useState(['exam', 'sathi']);
    const [serviceRequests] = useState([
        {
            id: 1,
            title: "Host Requesting Service",
            user: "John Doe",
            rating: 4.8,
            reviews: 2,
            price: 350,
            status: "Pending"
        },
        {
            id: 2,
            title: "Last Requesting Service",
            user: "Jane Smith",
            rating: 4.0,
            reviews: 5,
            price: 500,
            status: "In Progress"
        }
    ]);
    
    const services = [
        { id: 'exam', icon: examIcon, text: 'Exam assistance' },
        { id: 'sathi', icon: sathiIcon, text: 'Find your saathi' },
        { id: 'comingSoon', icon: comingSoonIcon, text: 'Other Services Coming soon' }
      ];

    const handleServiceSelect = (serviceId) => {
        // Prevent deselection of manual services
        if (['exam', 'sathi'].includes(serviceId)) return;
        
        setSelectedServices(prev => {
            if (prev.includes(serviceId)) {
                return prev.filter(id => id !== serviceId);
            }
            return [...prev, serviceId];
        });
    };
    const handleAcceptRequest = (requestId) => {
        const request = serviceRequests.find(r => r.id === requestId);
        navigate('/provider-order-details', { 
          state: { request } 
        });
      };
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <div className="user-greeting">
                    {user && <p>Hey {user.username}, Welcome back!! You're logged in as a <b>service provider</b>...</p>}
                </div>

                <div className="ads">
                    <img src="ads.png" alt="In-app Advertising Market" className="ads" />
                </div>

                <div className="categories-section">
                    <h2 className='serv'>Services you are providing</h2>
                    
                    {/* Selected Services Display */}
                    <div className="services-selection">
                <div className="service">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-item ${
                                selectedServices.includes(service.id) ? 'selected' : ''
                            } ${
                                ['exam', 'sathi'].includes(service.id) ? 'permanent-selected' : ''
                            }`}
                            onClick={() => handleServiceSelect(service.id)}
                        >
                            <img src={service.icon} alt={service.text} className='service-img' />
                            <p>{service.text}</p>
                            {['exam', 'sathi'].includes(service.id)}
                        </div>
                    ))}
                </div>
            </div>

                    {/* Service Requests Section */}
                    <div className="service-requests">
                        <h3>Service Requests</h3>
                        {serviceRequests.map(request => (
                            <div key={request.id} className="request-card">
                                <div className="request-header">
                                    <h4>{request.title}</h4>
                                    <span className={`status-badge ${request.status.toLowerCase()}`}>
                                        {request.status}
                                    </span>
                                </div>
                                <div className="request-details">
                                    <p>User: {request.user}</p>
                                    <p>Rating: {request.rating} ({request.reviews} reviews)</p>
                                    <p>Price: Rs.{request.price}</p>
                                </div>
                                <button className="action-button" onClick={() => {
                                    if (request.status === 'Pending') {
                                        handleAcceptRequest(request.id);
                                    }
                                }}>
                                    {request.status === 'Pending' ? 'Accept Request' : 'View Details'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatbox">
                    <img src={chatboxIcon} alt="chatBox" className='chat'/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Providers;