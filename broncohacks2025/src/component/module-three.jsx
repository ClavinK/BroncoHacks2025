// src/component/module-three.jsx

import React, { useState, useEffect } from 'react';
import '../component/mod-global.css';
import '../component/mod-strong-color.css';
import '../component/mod-info-vid.css';
import Quizzes from '../container/quizzes';
import { useNavigate } from 'react-router-dom';

function ModuleThree(props){
    const qPhish = [
        {
            question: "What is the main goal of an email phishing scam?",
            options: [
              "To offer discounts on popular products",
              "To trick you into sharing personal information",
              "To send you jokes and memes",
              "To update your email settings"
            ],
            answer: "To trick you into sharing personal information"
          },
          {
            question: "Which of the following is a sign of an email phishing attempt?",
            options: [
              "Proper grammar and spelling",
              "An email from your friend",
              "Urgent language or requests for personal information",
              "A newsletter you subscribed to"
            ],
            answer: "Urgent language or requests for personal information"
          }
    ]

    const qCall = [
        {
            question: "What is vishing?",
            options: [
              "A method of fishing using voice commands",
              "A scam where attackers use phone calls to trick individuals into revealing personal information",
              "A technique for improving voice recognition software",
              "A type of email phishing involving voicemail messages"
            ],
            answer: "A scam where attackers use phone calls to trick individuals into revealing personal information"
          },
          {
            question: "Which of the following is a common tactic used in vishing scams?",
            options: [
              "Sending emails with malicious links",
              "Creating fake social media profiles",
              "Spoofing caller ID to appear as a trusted organization",
              "Hacking into voicemail systems"
            ],
            answer: "Spoofing caller ID to appear as a trusted organization"
          }
    ]
    
    const [currentModule, setCurrrentModule] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (props.currentPage) {
            setCurrrentModule(props.currentPage);
        }
    }, [props.currentPage]);

    const handleNext = () => {
        switch(currentModule){
            case 1:
                navigate("/Phishing");
                break;
            case 2:
                navigate("/Scam Call");
                break;
            case 3:
                navigate("/Fake Ads");
                break;
            case 4:
                navigate("/Ad");
                break;
            default:
                setCurrrentModule(currentModule + 1);
        }
        window.scrollTo(0,0);
    };

    const handlePrev = () => {
        if (currentModule === 1) {
            navigate('/ModuleTwo');
        } else {
            setCurrrentModule(currentModule - 1);
        }
        window.scrollTo(0,0);
    };

    return (
        <>
            <div className="module-three">
                {currentModule === 1 && (
                    <div className="modules">
                        <h1>Potential Dangers on the Internet</h1>
                        <div className="dangers">
                            <h2>Be on the Lookout For:</h2>
                            <p>
                                While the Internet is a great place to learn and connect with others, it can also be
                                a dangerous place. Here are some potential dangers to be aware of:
                            </p>
                                <ul>
                                    <li>
                                        <strong>Email Phishing</strong>
                                    </li>
                                    <li>
                                        <strong>Phone Scams</strong>
                                    </li>
                                    <li>
                                        <strong>Fake Advertisement</strong>
                                    </li>
                                </ul>

                                <p>
                                    We will go more into detail about these later on in this module. Be prepared to take mini-quizzes to check for your
                                    understanding of the potential dangers of each of these topics.
                                </p>
                        </div>
                        <div class="button-container">
                            <button className="btn" onClick={handlePrev}>Back</button>
                            <button className="btn" onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )}

                {currentModule === 2 && (
                    <div className="modules">
                        <h1>Email Phishing</h1>
                        <div class="email-phishing">
                            <h2>What is Phishing?</h2>
                            <p>
                                Email Phishing is when a scammer send you a <strong>fake email</strong> in an attempt to trick you into
                                sharing or giving away your personal information. This includes things like your passwords, credit card
                                information, or social security number.

                            </p>
                            <p>
                                Here are some signs of email phishing:
                            </p>
                                <ul>
                                    <li>
                                        Unusual sender email address
                                    </li>
                                    <li>
                                        Urgent language or threats
                                    </li>
                                    <li>
                                        It asks for private information like your password or credit card
                                    </li>
                                    <li>
                                        It has weird spelling or weird wording
                                    </li>
                                </ul>
                            <p>
                                While it may look real, like it's from your own bank or a company that you frequent, it's more than likely
                                from a scammer. Below is a quick video further explaining what Email Phishing is.
                            </p>
                        </div>
                        <div class="informational-video">
                            <iframe width="640" height="400" src="https://www.youtube.com/embed/Y7zNlEMDmI4?si=Cx8SkZH60If0lTMC&autoplay=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <Quizzes name="Phishing" questions={qPhish} />
                        <div class="button-container">
                            <button class="btn" onClick={handlePrev}>Back</button>
                            <button class="btn" onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )}

                {currentModule === 3 && (
                    <div className="modules">
                        <h1>Phone Scams</h1>
                        <div class="phone-scams">
                            <h2>What are Phone Scams?</h2>
                            <p>
                                A <strong>phone scam</strong> is when a scammer calls you and tries to trick you into giving them your
                                personal
                                information or money by pretending to be someone they are not. These can include banks, government workers,
                                or even a family
                                member.
                            </p>
                            <p>
                                Here are some signs of a phone scam:
                            </p>
                                <ul>
                                    <li>They say you owe them money or that you are in trouble</li>
                                    <li>They ask for your social security number, bank info, or other sensitive information</li>
                                    <li>They want to you to buy gift cards or send money fast</li>
                                    <li>They say, "Don't tell anyone"</li>
                                </ul>
                        </div>
                        <div class="informational-video">
                            <iframe width="640" height="400"
                                src="https://www.youtube.com/embed/DysFLnOf4Nw?si=VoEo2oQlZukF2QCP&autoplay=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <Quizzes name="Phone Scam" questions={qCall} />
                        <div class="button-container">
                            <button class="btn" onClick={handlePrev}>Back</button>
                            <button class="btn" onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )}

                {currentModule === 4 && (
                    <div className="modules">
                        <h1>Fake Advertisements</h1>
                        <div class="fake-advertisements">
                            <h2>What are Fake Advertisements?</h2>
                            <p>
                                Fake advertisements are ads that try to trick you into buying something that doesn't exist or is not what it
                                seems.
                                These ads can be found on social media, websites, or even in your email.
                            </p>
                            <p>
                                Here are some signs of fake advertisements:
                            </p>
                                <ul>
                                    <li>Unrealistic promises or prices</li>
                                    <li>Too good to be true offers</li>
                                    <li>Strange website links</li>
                                    <li>Poor grammar or spelling</li>
                                </ul>
                            <p>Below is a quick video further explaining what Fake Advertisements are.</p>
                        </div>
                        <div class="informational-video">
                            <iframe width="640" height="400" src="https://www.youtube.com/embed/3oEI0FCnI_Y?si=XZeAdRaAwr3-VoxG&autoplay=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div class="button-container">
                            <button class="btn" onClick={handlePrev}>Back</button>
                            <p>Next is a demonstration of a fake website</p>
                            <button class="btn" onClick={handleNext}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ModuleThree;