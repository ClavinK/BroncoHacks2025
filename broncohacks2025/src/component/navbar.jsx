import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const navOptions = ["Landing", "Phishing", "Ad", "Scam Call"];

function Navbar() {
  return (
    <nav>
      {navOptions.map(function(navOpt) {
        var formatted = "/" + navOpt.toLowerCase().replace(/\s+/g, '');

        return (
          <div key={navOpt} className="navLink">
            {navOpt === "Landing" ? (
              <Link to="/landing?from=nav">{navOpt}</Link>
            ) : (
              <Link to={formatted}>{navOpt}</Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;