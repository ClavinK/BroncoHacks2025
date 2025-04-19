import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Scam Call", "Fake Ads"];
const maskOptions = ["Landing", "Module 1", "Module 2", "Module 3"];

function Navbar() {
  const [navLinks, setNavLinks] = useState([]);

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
