import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../files/Landing.css'


function LandingPage() {
    const navigate = useNavigate();
    const timers = useRef([]);

    const location = useLocation();
    const isFromNav = new URLSearchParams(location.search).get('from') === 'nav';

    const [messageIndex, setMessageIndex] = useState(isFromNav ? 3: 1);
    const [showButton, setShowButton] = useState(isFromNav);

    useEffect(() => {
        if (isFromNav) return;
    
        const timerArray = [];
    
        timerArray.push(setTimeout(() => setMessageIndex(2), 3000));
        timerArray.push(setTimeout(() => setMessageIndex(3), 6000));
        timerArray.push(setTimeout(() => setMessageIndex(4), 9000));
        timerArray.push(setTimeout(() => setShowButton(true), 10000));
    
        timers.current = timerArray; 
    
        return () => {
            timerArray.forEach(clearTimeout);
        };
    }, [isFromNav]);

    var message
    if (messageIndex === 1){
        message = <h1 className="landingH1">WHY DID YOU CLICK THAT BUTTON?!?!?</h1>;
    }
    else if (messageIndex === 2){
        message = <h1 className="landingH1">Did You Know You Can Lose $Millions By Clicking That Button?</h1>;
    }
    else if (messageIndex === 3){
        message = <h1 className="landingH1">Next Time, THINK BEFORE YOU DO!</h1>;
    }
    else{
        message = <h1 className="landingH1">Lets Make Sure This Never Happens Again.</h1>;
    }

    function handleClick(){
        navigate('/Landing');
    }

    return (
        <div className='Landing-center'>
            <div>
                {message}
                {showButton && (<button className="landingButton fade-in" onClick={handleClick}>Let's Begin</button>)}
            </div>
        </div>
    );
}

export default LandingPage;
