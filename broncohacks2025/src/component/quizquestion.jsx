import React, {useState} from 'react';
import './quizquestion.css';


function QuizQuestion(props){
    const questions = props.questions //insert question in the format below
        // {
        //     question: /* insert question here */,
        //     option: /* insert array of choices */,
        //     answer: /* insert correct answer */
        // }
    
    const [hoveredOption, setHoveredOption] = useState(null);
    const [clickedOption, setClickedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
   
    const handleAnswerOptionClick = (selectedAnswer) => {
      setClickedOption(selectedAnswer);
      setIsCorrect(selectedAnswer === questions.answer);
    };

    const getButtonStyle = (option) => {
        if(hoveredOption === option && clickedOption !== option){
            return { backgroundColor: 'grey', color: 'white'};
        }

        if (option === questions.answer && isCorrect){
            return { backgroundColor: 'green', color: 'white' };
        } else if (option === clickedOption){
            return { backgroundColor: 'red', color: 'white' };
        } else {
            return { backgroundColor: 'white' };
        }
      };
        
    return (
        <div className='quiz-container'>
            <div className="question-section">
                <div id='question-header'>Question</div>
                <div id="question-text">{questions.question}</div>
            </div>
            <div className="answer-section">
                {questions.options.map((option)=>(
                    <button 
                        className='answer-button' 
                        key={option} 
                        onClick={()=>handleAnswerOptionClick(option)}
                        onMouseEnter={() => setHoveredOption(option)}
                        onMouseLeave={() => setHoveredOption(null)}
                        style={getButtonStyle(option)} 
                    >
                        {option}
                    </button>
                ))}
            </div> 
        </div>
    )
}

export default QuizQuestion;