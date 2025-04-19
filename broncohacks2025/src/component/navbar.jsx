import React from 'react';
import { useNavigate } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Ad", "ScamCall"]

function Navbar() {
  const navigate = useNavigate();
  
  function handleClick(page) {
    navigate('/' + page);
  }
  
  return (
    <nav>
        {navOptions.map((navOpt)=>
          <button
            className='navButton' 
            key={navOpt}
            onClick={handleClick(navOpt)
          }>
            {navOpt}
          </button>
        )}
    </nav>
  );
}

export default Navbar;