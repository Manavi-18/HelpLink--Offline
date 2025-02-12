import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyRequests.css'; // Import CSS

const MyRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Load SOS requests from local storage
    const savedRequests = JSON.parse(localStorage.getItem('sosRequests')) || [];
    setRequests(savedRequests);
  }, []);

  return (
    <div className="requests-container">
      <h1>My Requests</h1>
      {requests.length === 0 ? (
        <p className="no-requests">No requests found.</p>
      ) : (
        requests.map((req, index) => (
          <div key={index} className="request-card">
            <h2>Request {index + 1}</h2>
            <p><strong>Emergency Type:</strong> {req.emergencyType}</p>
            <p><strong>Message:</strong> {req.message}</p>
            <p><strong>Status:</strong> {req.status}</p>
            <p><strong>ETA for responder:</strong> {req.eta}</p>
            <p><strong>Last Location Update:</strong> {req.lastLocation}</p>
            <button 
              className="details-button" 
              onClick={() => navigate('/responder-info', { state: req })}
            >
              Details
            </button>
          </div>
        ))
      )}
      <button className="home-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default MyRequests;
