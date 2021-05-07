import React from 'react';

// CSS
import './style.scss';

function NavBar() {
    return (
      <nav className="navbar">
        <ul className="navbar__itemList">
            <li className="navbar__itemList__item">Home</li>
            <li className="navbar__itemList__item">About</li>
            <li className="navbar__itemList__item">Contact</li>
            <li className="navbar__itemList__item">Blog</li>
            <li className="navbar__itemList__item">Careers</li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;