import React, { useState, useEffect } from 'react';
import '../component/quizquestion.css'

function Quizzes(props){
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    useEffect(() =>{
        if(showScore) {
            alert(`You got ${score} out of ${props.questions.length} correct!`)
        }
    }, [showScore])

    const handleOptionChange = (questionKey, selectedValue) => {
        setShowScore(false);
        setSelectedOptions(prev => ({
          ...prev,
          [questionKey]: selectedValue
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let correctCount = 0;
        const incorrect = [];
        const correct = [];
      
        if(Object.keys(selectedOptions).length === 2){
            setShowScore(true);
        }

        props.questions.forEach((q, index) => {
            const qKey = `quiz_${index+1}`;
            if (selectedOptions[qKey] === q.answer) {
                correctCount++;
                correct.push(qKey);
            } else {
                incorrect.push(qKey);
            }
        });
      
        setCorrectAnswers(correct);
        setIncorrectAnswers(incorrect);
        setScore(correctCount);
        setShowScore(true);
    };
    
    let list = [];
    let count = 1;
    const questions = props.questions;

    for(let i = 0; i < props.questions.length; i++){
        let qKey = `quiz_${count++}`;
        list.push(
            <div className='quiz-container'>
                <div className="question-section">
                    <div id='question-header'>Question</div>
                    <div id="question-text">{questions[i].question}</div>
                </div>
                <div>
                    {questions[i].options.map((option) => (
                        <>
                            <label
                                style={{
                                    color: showScore && selectedOptions[qKey] === option
                                    ? (option === questions[i].answer ? 'green' : 'red')
                                    : 'black'
                                }}
                            >
                            <input
                                type="radio"
                                value={option}
                                name={qKey}
                                checked={selectedOptions[qKey] === option}
                                onChange={() => handleOptionChange(qKey, option)}
                                />
                                {option}
                            </label><br />
                        </>
                    ))}
                </div>
            </div>
        )
    }

    return(
        <>
            <h1>{props.name} Quiz</h1>
            <form className="answer-section">
                <div>{list}</div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Quizzes;