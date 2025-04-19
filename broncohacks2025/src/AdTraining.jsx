import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import ErrorPopup from "./ErrorPopup";
import "./AdTraining.css";
import EmailPopUp from "./EmailPopUp";
import FakeEmailAlert from "./FakeEmailAlert";
import Quizzez from "./container/quizzes";

function AdTraining() {
  const questions = [
    {
      question: "What is a common characteristic of fake advertisements?",
      options: [
        "They are always on TV",
        "They have poor grammar and spelling",
        "They never offer discounts",
        "They only appear during holidays"
      ],
      answer: "They have poor grammar and spelling"
    },
    {
      question: "Where can fake advertisements commonly be found?",
      options: [
        "Only on television",
        "Only in newspapers",
        "On social media, websites, or emails",
        "Only in stores"
      ],
      answer: "On social media, websites, or emails"
    }
  ]

  
  const [adStyles, setAdStyles] = useState([]);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showAdPopup, setShowAdPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showFakeEmailAlert, setShowFakeEmailAlert] = useState(false);
  const navigate = useNavigate();

  function getRandomNumber() {
    const min = Math.ceil(Math.min(5, 12));
    const max = Math.floor(Math.max(5, 12));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const emailTimer = setTimeout(() => {
      setShowEmailPopup(true);
    }, 15000);
    return () => clearTimeout(emailTimer);
  }, []);

  useEffect(() => {
    let autoCloseTimer;
    if(showEmailPopup) {
      autoCloseTimer = setTimeout(() =>{
        setShowEmailPopup(false);
      }, 3000);
    }

    return () => clearTimeout(autoCloseTimer);
  }, [showEmailPopup]);

  useEffect(() =>{
    // Random ad popup timer
    const time = setTimeout(() => {
      setShowAdPopup(true);
    }, getRandomNumber() * 1000);
  
    // Generate and store random styles for each ad once
    const generatedStyles = Array.from({ length: 4 }, () => getRandomStyle());
    setAdStyles(generatedStyles);
  
    return (() => {
      clearTimeout(time);
      
  })}, []);

  function getRandomStyle() {
    const random = Math.floor(Math.random() * 4 + 1)
    switch(random){
      case 1:
        return {  backgroundColor: 'marigold', borderColor: 'red', borderStyle: 'dashed', borderWidth: '5px' };
      case 2:
        return { backgroundColor: 'rgba(255, 105, 180, 0.453)', borderColor: 'black', borderStyle: 'double', borderWidth: '6px' };
      case 3:
        return { backgroundColor: '#00ffff46', borderColor: '#0000ff', borderStyle: 'ridge', borderWidth: '7px' };
      case 4:
        return { backgroundColor: '#f8f8f8', borderColor: '#cc0000', borderStyle: 'inset', borderWidth: '2px' };
      default:
        return { backgroundColor: 'white', borderColor: 'red', borderStyle: 'dashed', borderWidth: '2px'};  
    }
  
  useEffect(() => {
    const time = setTimeout(() => {
      setShowAdPopup(true);
    }, getRandomNumber() * 1000);

    return () => clearTimeout(time);
  }, []);

  const showPopup = () => {
    setShowErrorPopup(true);
    console.log("Get Scammed!");
  };

  const handleErrorPopupClose = () => {
    setShowErrorPopup(false);
  };

  return (
    <div>
      <header>
        <h1>Senior Community News</h1>
        <p>Your trusted source for local information</p>
      </header>

      <div className="main-content">
        <article>
          <h2>Upcoming Community Events</h2>
          <p>
            Join us for our weekly bingo night every Thursday at the community
            center. Doors open at 6:00 PM.
          </p>

          <div className="warning-box">
            <h3>Practice Internet Safety</h3>
            <p>
              This website contains practice ads to help you learn what to
              avoid. Some ads are safe, but others are fake and demonstrate what
              malicious ads look like.
            </p>
          </div>

          <h3>Local Gardening Club Meeting</h3>
          <p>
            The gardening club will meet this Saturday at 10:00 AM to discuss
            spring planting. Bring your favorite seeds to share!
          </p>

          <div className="ad fake" onClick={() => showPopup()} style={adStyles[0]}>
            <div className="ad-title">
              CONGRATULATIONS! You're our 1,000,000th Visitor!
            </div>
            <div className="ad-content">
              Click here to claim your FREE $1000 Walmart Gift Card! Limited
              time offer!
            </div>
          </div>

          <h3>Technology Workshop Announcement</h3>
          <p>
            Next month we'll be hosting a free workshop on using smartphones.
            Sign up at the front desk.
          </p>

          <div className="ad fake" onClick={() => showPopup()}  style={adStyles[1]}>
            <div className="ad-title">
              URGENT: VIRUS DETECTED ON YOUR DEVICE!
            </div>
            <div className="ad-content">
              Your computer has been infected with 5 viruses! Click here to scan
              and remove them now before they steal your personal information!
            </div>
          </div>

          <h3>Book Club Selection</h3>
          <p>
            This month's book is "The Thursday Murder Club" by Richard Osman.
            Discussion on March 25th.
          </p>

          <div className="warning-box">
            <p>
              Sometimes buttons can be deceptive. This looks like a legitimate
              download button:
            </p>
            <div className="fake-download-button" onClick={() => showPopup()}>
              Download Event Calendar
            </div>
            <p>
              But it's actually fake. Always verify download buttons before
              clicking.
            </p>
          </div>
        </article>

        <aside>
          <h3>Today's Weather</h3>
          <p>
            Sunny with a high of 72°F. Perfect weather for a walk in the park!
          </p>

          <div className="ad fake" onClick={() => showPopup("news")}  style={adStyles[2]}>
            <div className="ad-title">
              SHOCKING: Local Grandma Wins $10 Million!
            </div>
            <div className="ad-content">
              Click to see how she did it with this one simple trick!
            </div>
          </div>

          <h3>Health Tip of the Day</h3>
          <p>
            Staying hydrated is important, especially as we age. Aim for 6-8
            glasses of water daily.
          </p>

          <div
            className="ad"
            onClick={() =>
              alert(
                "This is a safe, legitimate ad. Good job checking before clicking!"
              )
            }
          >
            <div className="ad-title">Community Center Membership</div>
            <div className="ad-content">
              Only $25/year for access to all our facilities and events.
            </div>
          </div>

          <div className="ad fake" onClick={() => showPopup()}  style={adStyles[3]}>
            <div className="ad-title">ALERT: Microsoft Windows Support</div>
            <div className="ad-content">
              We've detected problems with your computer. Call our support team
              immediately at 1-800-555-0199 to prevent data loss!
            </div>
          </div>
        </aside>
      </div>

      {showErrorPopup && (
        <ErrorPopup displayTime={3000} onClose={handleErrorPopupClose} />
      )}

      {showAdPopup && <Popup />}

      {showEmailPopup && (
        <EmailPopUp
          onClick={() => {
            setShowFakeEmailAlert(true);
            setShowEmailPopup(false);
          }}
        />
      )}

      {showFakeEmailAlert && (
        <FakeEmailAlert onClose={() => setShowFakeEmailAlert(false)} />
      )}

      <footer>
        <p>© 2025 Senior Community News - Practice Internet Safety Website</p>
      </footer>
      <Quizzez name="Misleading Ad" questions={questions} />
      <div className="button-container">
        <button
          className="btn"
          onClick={() => {
            //Navigate to module one
            navigate('/Fake Ads');
            window.scrollTo(0, 0);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
  }
}

export default AdTraining;
