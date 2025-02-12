import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css'; // Import CSS

const Settings = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default Settings;
