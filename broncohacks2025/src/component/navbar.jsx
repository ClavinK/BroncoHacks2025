import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Ad", "ScamCall"]
let redirectPg = "";

function setRedirect(navOpt){
  redirectPg = `/${navOpt}`;
}

function Navbar() {
  return(
   <nav>
      {navOptions.map((navOpt) =>
        <div className='navLink'>
          {setRedirect(navOpt)}
          <Link to={redirectPg}>{navOpt}</Link>
        </div>
          
      )}
    </nav>
  )
  
  
  
  // const navigate = useNavigate();
  
  // function handleClick(page) {
  //   let loadpage = `/${page}`;
  //   navigate('/');
  // }
  
  // return (
  //   <nav>
  //       {navOptions.map((navOpt)=>
  //         <button
  //           className='navButton' 
  //           key={navOpt}
  //           onClick={handleClick(navOpt)
  //         }>
  //           {navOpt}
  //         </button>
  //       )}
  //   </nav>
  // );
}

export default Navbar;