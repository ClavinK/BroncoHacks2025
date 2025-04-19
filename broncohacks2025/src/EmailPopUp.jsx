import React from 'react';
import './EmailPopup.css';

function EmailPopUp({ onClick }) {
    return (
        <div className="popup-overlay" onClick={onClick}>
            <div className="popup-content">
                <h4 className="popup-content-header">📧 You've Got a New Email!</h4>
                <p className="popup-content-text">Subject: <strong>Urgent! Confirm Your Account Nwo!</strong></p>
                <p className="popup-content-text">From: <strong>account.alerts@secure-mial.mailtb.jp</strong></p>
            </div>
        </div>
    );
}

export default EmailPopUp;