import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Scam Call", "Fake Ads"];

function Navbar() {
  const [navLinks, setNavLinks] = useState([]);

  window.scrollTo(0,0);

  useEffect(() => {
    const list = navOptions.map((option, i) => (
      <Link to={`/${option}`} key={option} style={{ textDecoration: 'none' }}>
        <div className="navLink">
          {navOptions[i]}
        </div>
      </Link>
    ));
    setNavLinks(list);
  }, []);

  return (
    <nav className="navbar">
      {navLinks}
    </nav>
  );
}

export default Navbar;
