import React from 'react';

// CSS
import './style.scss';

function NavBar() {
    return (
      <nav className="navbar">
        <ul className="navbar__itemList">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;