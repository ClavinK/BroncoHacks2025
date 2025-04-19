import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import ErrorPopup from "./ErrorPopup";
import "./AdTraining.css";

function AdTraining() {
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showAdPopup, setShowAdPopup] = useState(false);

  function getRandomNumber() {
    const min = Math.ceil(Math.min(1,6));
    const max = Math.floor(Math.max(1,6));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log(getRandomNumber() * 1000)
  })

  const showPopup = (() => {
    setShowErrorPopup(true);
    console.log("Get Scammed!")
  });

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

          <div className="ad fake" onClick={() => showPopup()}>
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

          <div className="ad fake" onClick={() => showPopup()}>
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
            <div
              className="fake-download-button"
              onClick={() => showPopup()}
            >
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

          <div className="ad fake" onClick={() => showPopup("news")}>
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

          <div className="ad fake" onClick={() => showPopup()}>
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

      

      <footer>
        <p>© 2025 Senior Community News - Practice Internet Safety Website</p>
      </footer>
    </div>
  );
}

export default AdTraining;
