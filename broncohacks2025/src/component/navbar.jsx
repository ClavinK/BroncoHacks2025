import { useNavigate } from 'react-router-dom';

navOptions = ["Landing", "Phishing", "Ad", "ScamCall"]

function Navbar() {
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