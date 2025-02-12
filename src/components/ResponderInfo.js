import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResponderInfo.css'; // Import CSS

const ResponderInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const request = location.state; // Get request details from navigation state

  return (
    <div className="responder-container">
      <h1>Responder Information</h1>
      <div className="info-card">
        <p><strong>Emergency Type:</strong> {request?.emergencyType || "N/A"}</p>
        <p><strong>Message:</strong> {request?.message || "No message provided"}</p>
        <p><strong>Responder's Name:</strong> [Name]</p>  {/* Replace with real data */}
        <p><strong>Responder's ID:</strong> [ID]</p>      {/* Replace with real data */}
        <p><strong>Current Location:</strong> {request?.lastLocation || "Unknown"}</p>
        <p><strong>ETA:</strong> {request?.eta || "Not Available"}</p>
      </div>
      <button className="back-button" onClick={() => navigate('/my-requests')}>Back</button>
    </div>
  );
};

export default ResponderInfo;
