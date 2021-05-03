import React from 'react';

// Components
import Logo from './Logo';
import NavBar from './NavBar';
import Button from '../Button';

// CSS
import './style.scss';

function Header() {
    return (
      <header className="header">
        <Logo />
        <NavBar />
        <Button buttonClass={"buttonContainer"}/>
      </header>
    );
  }
  
  export default Header;