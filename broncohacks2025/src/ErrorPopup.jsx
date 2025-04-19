import React, { useState, useEffect } from "react";
import "./AdTraining.css";

function ErrorPopup({ time = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, time);

    return () => clearTimeout(timer);
  }, [time, onClose]);

  return isVisible ? (
    <div open className="error">
      <h1>ERROR!</h1>
      <h3>This is not real.</h3>
      <p>Try not to click on suspicious advetisements.</p>
    </div>
  ) : null;
}

export default ErrorPopup;
