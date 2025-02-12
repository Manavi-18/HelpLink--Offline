import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SendSOS.css'; // Import CSS

const SendSOS = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    const newRequest = {
      emergencyType,
      message,
      location,
      status: 'Pending',
      eta: 'TBD',
      lastLocation: location
    };

    // Get existing requests from local storage or initialize an empty array
    const existingRequests = JSON.parse(localStorage.getItem('sosRequests')) || [];
    
    // Add new request to the list
    existingRequests.push(newRequest);
    
    // Save updated list back to local storage
    localStorage.setItem('sosRequests', JSON.stringify(existingRequests));

    // Navigate to confirmation page
    navigate('/sos-confirmation', { state: newRequest });
  };

  return (
    <div className="sos-container">
      <h1>Send SOS</h1>
      <select className="sos-select" onChange={(e) => setEmergencyType(e.target.value)} value={emergencyType}>
        <option value="">Select Emergency Type</option>
        <option value="Flood">Flood</option>
        <option value="Earthquake">Earthquake</option>
        <option value="Cyclone">Cyclone</option>
        <option value="Accident">Accident</option>
      </select>
      <input
        type="text"
        className="sos-input"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        className="sos-input"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="button-group">
        <button className="sos-button send" onClick={handleSend}>Send</button>
        <button className="sos-button cancel" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
};

export default SendSOS;
