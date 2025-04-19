import './App.css';
import Button from './files/Button';
import LandingPage from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popup from './Popup';
import React, { useState } from 'react';
import AdTraining from './AdTraining';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Button />} />
        <Route path = "/Landing" element={<LandingPage />} />
        <Route path = "/Ad" element={<AdTraining />} />
      </Routes>
    </Router>
    
  );
}

export default App;
