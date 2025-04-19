import React from 'react';
import './Popup.css';


const Popup = ({ title, message, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-popup" onClick={onClose}>x</button>
            </div>
        </div>
    )
}

export default Popup;