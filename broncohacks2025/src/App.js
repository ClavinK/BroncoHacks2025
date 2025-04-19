import './App.css';
import Button from './files/Button';
import LandingPage from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import React from 'react';
import AdTraining from './AdTraining';
<<<<<<< HEAD
import ModuleOne from './component/module-one';
import ModuleTwo from './component/module-two';
import ModuleThree from './component/module-three';

=======
import ModuleThree from './component/module-three';
>>>>>>> db7ce88e7ef502120e67252991e8271fa48e9d17


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
<<<<<<< HEAD
          <Route path = "/Phishing" element={setNavbar(<ModuleOne />)} />
=======
          <Route path = "/Phishing" element={setNavbar(<ModuleThree />)} />
>>>>>>> db7ce88e7ef502120e67252991e8271fa48e9d17
          <Route path = "/Ad" element={setNavbar(<AdTraining />)} />
          <Route path = "/Scam Call" element={setNavbar(<Button />)} />
          <Route path = "/ModuleOne" element={<ModuleOne/>} />
          <Route path = "/ModuleTwo" element={<ModuleTwo/>} />
          <Route path = "/ModuleThree" element={<ModuleThree/>} />
        </Routes>
      </Router>   
    </>   
  );
}

export default App;
