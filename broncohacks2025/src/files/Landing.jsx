import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'

function LandingPage() {
    const navigate = useNavigate();

    const [messageIndex, setMessageIndex] = useState(1);
    const [showButton, setShowButton] = useState(false);

    useEffect(function() {
        var timer1 = setTimeout(function() {
            setMessageIndex(2);
        }, 3000); //3 seconds

        var timer2 = setTimeout(function () {
            setMessageIndex(3);
        }, 6000); //6 seconds

        var timer3 = setTimeout(function () {
            setMessageIndex(4);
        }, 9000); //9 seconds

        var timer4 = setTimeout(function () {
            setShowButton(true);
        }, 10000); //9 seconds

        return function(){
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4)
        };
    }, []);

    var message
    if (messageIndex === 1){
        message = <h1>WHY DID YOU CLICK THAT BUTTON?!?!?</h1>;
    }
    else if (messageIndex === 2){
        message = <h1>Did You Know You Can Lose Millions By Clicking That Button?</h1>;
    }
    else if (messageIndex === 3){
        message = <h1>Next Time, THINK BEFORE YOU DO!</h1>;
    }
    else{
        message = <h1>Lets Make Sure This Never Happens Again.</h1>;
    }

    function handleClick(){
        navigate('/module-one');
    }

    return (
        <div className='Landing-center'>
            <div>
                {message}
                {showButton && (<button className="landingButton fade-in">Module 1</button>)}
            </div>
        </div>
    );
}

export default LandingPage;