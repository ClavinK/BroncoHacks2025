import React from 'react';
import './Button.css'
import { useNavigate } from 'react-router-dom';

function Button() {
  
  const navigate = useNavigate();

  function handleClick() {
    navigate('/info');
  }
    return (
      <div className='button-center'>
          <button className='button' onClick={handleClick}>CLICK ME</button>
      </div>
    );
  }

export default Button;