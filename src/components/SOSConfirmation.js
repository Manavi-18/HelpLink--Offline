import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SOSConfirmation.css'; // Import CSS

const SOSConfirmation = () => {
  const navigate = useNavigate();
  const locationData = useLocation();
  const { emergencyType, message, location } = locationData.state || {}; 

  return (
    <div className="confirmation-container">
      <h1>SOS Sent</h1>
      <div className="confirmation-details">
        <p><strong>Emergency Type:</strong> {emergencyType || 'Not Provided'}</p>
        <p><strong>Message:</strong> {message || 'No message provided'}</p>
        <p><strong>Location:</strong> {location || 'Location not specified'}</p>
        <p className="status"><strong>Status:</strong> Awaiting Response...</p>
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default SOSConfirmation;
