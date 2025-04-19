import './App.css';
import Button from './files/Button';
import LandingPage from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popup from './Popup';
import Navbar from './component/navbar';
import React, { useState } from 'react';

function setNavbar(element){
  return(
    <>
      <Navbar />
      {element}
    </>
  )
}

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Button />} />
          <Route path = "/Landing" element={setNavbar(<LandingPage />)} />
        </Routes>
      </Router>
      <div>
        {/* <Button /> */}
        <button onClick={() => setIsPopupOpen(true)}>Show Popup</button>
        
        {isPopupOpen && (
          <Popup 
            onClose={() => setIsPopupOpen(false)}
          />
        )}
        
      </div>
    </>  
    
  );
}

export default App;
