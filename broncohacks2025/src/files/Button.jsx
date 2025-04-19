import React, { useEffect, useState } from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  function handleClick() {
    navigate('/info');
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };


  const navigate = useNavigate();
  function handleSuspiciousClick() {
    navigate('/Landing');
  }

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="FakeBrand Logo" className="logo" width="40" />
        <nav className="scam-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">My Account</a></li>
          </ul>
        </nav>
      </header>

      <main className="landing-content">
        <h1>🎁 Congratulations, You’ve Been Selected!</h1>
        <p>You have a chance to win a brand new <strong>iPhone 16 Pro Max</strong> just by clicking the button below!</p>
        <p className="red-text">Act fast — limited supply available!</p>

        <div className="countdown-box">
          ⏳ Offer expires in: <span className="timer">{formatTime()}</span>
        </div>

        <button className="claim-button" onClick={handleSuspiciousClick}>
          CLAIM YOUR PRIZE NOW
        </button>

        <p className="fine-print">* Shipping fee of $1.00 required. Terms and conditions apply.</p>
      </main>

      <footer className="landing-footer">
        <p>© 2025 Apple Inc. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
      </footer>
    </div>
  );
}}

export default Landing;
