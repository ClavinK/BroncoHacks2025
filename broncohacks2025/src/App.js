import './App.css';
import Button from './files/Button';
import LandingPage from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import React from 'react';
import AdTraining from './AdTraining';
// import ModuleThree from './component/module-three';


function setNavbar(element){
  return(
    <>
      <Navbar />
      {element}
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Button />} />
          <Route path = "/Landing" element={setNavbar(<LandingPage />)} />
          <Route path = "/Phishing" element={setNavbar(<Button />)} />
          <Route path = "/Ad" element={setNavbar(<AdTraining />)} />
          <Route path = "/Scam Call" element={setNavbar(<Button />)} />
        </Routes>
      </Router>   
    </>   
  );
}

export default App;
