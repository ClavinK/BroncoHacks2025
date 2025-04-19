import React, {useEffect} from 'react';
import './FakeEmailAlert.css';

function FakeEmailAlert({ onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 7000);
    return () => clearTimeout(timer);
}, [onClose]);

    return(
        <div className="alert-overlay">
            <div className="alert-popup">
                ⚠️ That was a fake email. If this was a real scam email, 
                you may have gotten some viruses, or worse your information stolen!
            </div>
        </div>
    );
}

export default FakeEmailAlert;