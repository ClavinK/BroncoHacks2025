import React, {useState} from 'react';

function QuizQuestion(props){
    const questions = props.questions //insert question in the format below
        // {
        //     question: /* insert question here */,
        //     option: /* insert array of choices */,
        //     answer: /* insert correct answer */
        // }
    
    const [clickedOption, setClickedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
   
    const handleAnswerOptionClick = (selectedAnswer) => {
      setClickedOption(selectedAnswer);
      setIsCorrect(selectedAnswer === questions.answer);
    };

    const getButtonStyle = (option) => {
        if (option === questions.answer && isCorrect){
            return { backgroundColor: 'green', color: 'white' };
        } else if (option === clickedOption){
            return { backgroundColor: 'red', color: 'white' };
        } else {
            return { backgroundColor: 'white' };
        }
      };
        
    return (
        <>
            <h1>{props.name} Quiz</h1> {/*<< NEEDS THE MODULE NAME*/}
            <div className="quiz-app">
                <div className="question-section">
                    <h3>Question</h3>
                    <div className="question-text">{questions.question}</div>
                </div>
                <div className="answer-section">
                    {questions.options.map((option)=>(
                        <button 
                            className='answer-button' 
                            key={option} 
                            onClick={()=>handleAnswerOptionClick(option)}
                            style={getButtonStyle(option)} 
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div> 
        </>
    )
}

export default QuizQuestion;