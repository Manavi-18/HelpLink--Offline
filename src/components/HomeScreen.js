import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css'; // Import CSS

const HomeScreen = () => {
  return (
    <div className="home-container">
      <h1>HelpLink Offline</h1>
      <div className="animated-text-container">
        <p className="animated-text">Remain calm and trust that help is on the way.</p>
        <p className="animated-text">We are here for you.</p>
        <p className="animated-text">Please add your details correctly so our responders can reach you quickly and provide the assistance you need.</p>
      </div>
      <div className="button-container">
        <Link to="/send-sos">
          <button className="home-button">Send SOS</button>
        </Link>
        <Link to="/my-requests">
          <button className="home-button">My Requests</button>
        </Link>
        <Link to="/settings">
          <button className="home-button">Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
