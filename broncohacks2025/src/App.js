import './App.css';
import Button from './files/Button';
import LandingPage from './files/LandingPage';
import Info from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import React from 'react';
import AdTraining from './AdTraining';
import ModuleOne from './component/module-one';
import ModuleTwo from './component/module-two';
import ModuleThree from './component/module-three';
import Quizzes from './container/quizzes';



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
<<<<<<< HEAD
          <Route path="/landing" element={setNavbar(<LandingPage />)} />  
          <Route path="/info" element={<Info />} />
=======
          <Route path = "/Landing" element={<LandingPage />} />
>>>>>>> 0880ca792545afb9f7a28cce5f5e38f68c58bd12
          <Route path = "/Phishing" element={setNavbar(<ModuleThree currentPage={2} />)} />
          <Route path = "/Fake Ads" element={setNavbar(<ModuleThree currentPage={4} />)} />
          <Route path = "/Scam Call" element={setNavbar(<ModuleThree currentPage={3} />)} />
          <Route path = "/ModuleOne" element={<ModuleOne/>} />
          <Route path = "/ModuleTwo" element={<ModuleTwo/>} />
          <Route path = "/ModuleThree" element={<ModuleThree/>} />
          <Route path = "/Ad" element={setNavbar(<AdTraining/>)} />
        </Routes>
      </Router>   
    </>   
  );
}

export default App;
