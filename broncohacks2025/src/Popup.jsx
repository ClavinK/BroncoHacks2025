import React, { useState, useEffect } from "react";
import "./Popup.css";
import ErrorPopup from "./ErrorPopup";

export default function Popup() {
  const [popup, setPopup] = useState(true);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const showPopup = () => {
    setPopup(true);
    setShowErrorPopup(true);
  };

  const close = (event) => {
    setPopup(false);
    setShowErrorPopup(false);
    event.stopPropagation();
  };

  const handleErrorPopupClose = () => {
    setShowErrorPopup(false);
  };

  useEffect(() => {
    if (popup) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [popup]);

  return (
    <>
      {popup && (
        <div className="modal">
          <div className="modal-content" onClick={showPopup}>
            <h2>Discounted Plumbing in Your Area</h2>
            <p>
              Call (414) 414-4444 or<b>Click</b>here to get your free quote today and receive up to 10% off for first time customers!
            </p>
            <a class="round-button" onClick={close}>x</a>
          </div>
        </div>
      )}
      {showErrorPopup && (
        <ErrorPopup displayTime={3000} onClose={handleErrorPopupClose} />
      )}
    </>
  );
}
