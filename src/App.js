import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import SendSOS from './components/SendSOS';
import SOSConfirmation from './components/SOSConfirmation';
import MyRequests from './components/MyRequests';
import ResponderInfo from './components/ResponderInfo';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/send-sos" element={<SendSOS />} />
        <Route path="/sos-confirmation" element={<SOSConfirmation />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/responder-info" element={<ResponderInfo />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
