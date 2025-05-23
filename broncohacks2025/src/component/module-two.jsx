// src/component/module-two.jsx
import '../component/mod-global.css';
import '../component/mod-strong-color.css';
import { useNavigate } from 'react-router-dom';

function ModuleTwo() {
    const navigate = useNavigate();
    return (
        <div className="modules">
            <h1>How to stay safe on the Internet!</h1>
            <div className="safety">
                <h2>Staying Safe on the Internet</h2>
                <p>What exactly is online safety? Online safety essentially means protecting
                    yourself and your information when using the Internet. Much like how you
                    would lock your doors and windows to keep yourself safe at home, you should
                    also take the necessary steps to protect yourself online.
                </p>
                <p>
                    Here are some safety rules to keep in mind when surfing the web:
                </p>
                    <ul>
                        <li>
                            Don't share personal info like your address, phone number, or
                            passwords with strangers on the internet.
                        </li>
                        <li>Use stronger passwords and don't reuse the same password everywhere.</li>
                        <li>
                            <strong><em>Think before you click</em></strong> - if a message, ad,
                            pop-up, link, or email looks suspicious, do not click on it.
                        </li>
                        <li>
                            <strong><em>Keep Devices Updated</em></strong> - Make sure your
                            devices (whether it be a computer, tablet, or phone) are always up to
                            date with the latest software and security updates.
                        </li>
                        <li>
                            When in doubt, as a trusted person in your life for help. If you are ever
                            unsure of a text, email, link, website, or etc. ask someone you trust and is
                            close to you for help. This could be a family member, friend, or professional in
                            the industry.
                        </li>
                    </ul>
            </div>
            <div className="button-container">
                <button
                    className="btn"
                    onClick={() => {
                        //Navigate to module one
                        navigate('/ModuleOne');
                        window.scrollTo(0,0);
                    }}
                >
                    Back
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        navigate('/ModuleThree');
                        window.scrollTo(0,0);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ModuleTwo;