import React from 'react';

// Components
import Logo from './Logo';
import NavBar from './NavBar';
import Button from '../Button';

// CSS
import './style.scss';

// IMG
import logo from '../../docs/easybank-landing-page-master/images/logo.svg';

function Header({ logoClassName, logoSrc }) {
    return (
      <header className="header">
        <Logo logoClassName={"logoContainer__logo"} logoSrc={logo}/>
        <NavBar />
        <Button buttonClass={"buttonContainer"}/>
      </header>
    );
  }
  
  export default Header;