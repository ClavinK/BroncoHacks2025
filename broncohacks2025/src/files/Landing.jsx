import React, { useEffect, useState } from 'react';
import './Landing.css'

function LandingPage() {

    const [messageIndex, setMessageIndex] = useState(1);

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

        return function(){
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
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

    return (
        <div className='Landing-center'>
            <div>
                {message}
            </div>
        </div>
    );
}

export default LandingPage;