import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Ad", "Scam Call"]
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
}

export default Navbar;