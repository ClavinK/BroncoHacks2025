import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../files/LandingPage.css';

function Landing() {
    const navigate = useNavigate();
    const location = useLocation();
    const isFromNav = new URLSearchParams(location.search).get('from') === 'nav';
    const [showButton, setShowButton] = useState(isFromNav);

    useEffect(() => {
        if (isFromNav) return;
        const timer = setTimeout(() => setShowButton(true), 1000);
        return () => clearTimeout(timer);
    }, [isFromNav]);

    function handleClick() {
        navigate('/ModuleOne');
    }

    return (
        <div className="Landing-wrapper">

            <div className="Landing-content fade-text"> {/* fade-in animation */}
                <div className="Landing-text">
                    <h1 className="landingH1">To Ensure Scams Don't Happen To You, STAY INFORMED. ⚠️</h1>
                    <p className="landing-subtext">
                        Did You Know, Over $10 billion Were lost to scams in 2023? 
                    </p>

                    {/* New Callout Box */}
                    <div className="callout-box">
                        “Most scams rely on human error. Awareness is your best defense.”
                    </div>

                    <ul className="scam-facts">
                        <li>💬 1 in 3 users click phishing links unknowingly.</li>
                        <li>📞 Scam calls often mimic real bank numbers.</li>
                        <li>🤖 Deepfake voices now impersonate real people.</li>
                        <li>🧲 Fake ads lure users with unbelievable deals or urgent messages.</li>
                    </ul>
                </div>

                <div className="Landing-cta">
                    {showButton && (
                        <>
                            <button className="altButton fade-in" onClick={handleClick}>
                                Learn More
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Landing;
