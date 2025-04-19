import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Scam Call", "Ad"]

function Navbar() {
  return(
   <nav>
      {navOptions.map((navOpt) =>(
        <Link to={`/${navOpt}`} key={navOpt} style={{ textDecoration: 'none' }}>
        <div className="navLink">
          {navOpt}
        </div>
      </Link>
      ))}
    </nav>
  )
}

export default Navbar;