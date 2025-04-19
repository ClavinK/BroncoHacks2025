//src/component/module-one.jsx
import {useNavigate} from 'react-router-dom';
import '../component/mod-global.css';
import '../component/module-one.css';

function ModuleOne() {
   
        const navigate = useNavigate();
        return(
            <div className="module-one">
                <h1>Module 1: What is the Internet?</h1>
                <div className="introduction">
                    <h2>What is the Internet and the Web?</h2>
                    <p>When you think of the Internet, think of it as a route to get from point A 
                        to point B. The Internet, at its simplest form, is like a series of wires 
                        and roads that connect computers and devices all over the world.
                    </p>
                    <p>
                        When thinking of the World Wide Web, or Web for short, think of it as a 
                        collection of houses and stores you can visit. The Web is a collection of 
                        stores or houses that you can visit using a Web Browswer. Some popular Web
                        Browsers include Google Chrome, Microsoft Edge, Safari, and Mozilla Firefox.
                    </p>
                    <p>
                        A Web Browser is like a TV remote, it allows you to find and navigate websites, 
                        similar to how a TV remote allows you to find and navigate through different 
                        channels. 
                    </p>
                </div>
                <div className="button-container">
                    <button 
                    className="btn"
                    onClick={() => {
                        //Navigate to landing page
                        navigate('/Landing');
                    }}
                    >
                    Back</button>
                    <button 
                    className="btn" 
                    onClick={() => {
                        //Navigate to module two
                        navigate('/ModuleTwo');
                    }}
                    >
                    Next
                    </button>
                </div>
            </div>
        );
    
}

export default ModuleOne;