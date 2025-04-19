import './App.css';
import Button from './files/Button';
import LandingPage from './files/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popup from './Popup';
import Navbar from './component/navbar';
import React, { useState } from 'react';
import QuizQuestion from './component/quizquestion';

const sampleQuestion = {
  question: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  answer: "Paris"
};

function setNavbar(element){
  return(
    <>
      <Navbar />
      {element}
      <QuizQuestion name="Geography" questions={sampleQuestion}/>
    </>
  )
}
import AdTraining from './AdTraining';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Button />} />
          <Route path = "/Landing" element={setNavbar(<LandingPage />)} />
          <Route path = "/Phishing" element={setNavbar(<Button />)} />
          <Route path = "/Ad" element={setNavbar(<Button />)} />
          <Route path = "/Scam Call" element={setNavbar(<Button />)} />
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
