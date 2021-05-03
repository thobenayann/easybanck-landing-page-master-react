import React from 'react';

// CSS
import logo from '../../../docs/easybank-landing-page-master/images/logo.svg';
import './style.scss';

function Logo() {
    return (
      <div className="logoContainer">
        <img className="logoContainer__logo" alt="logo" src={logo} />
      </div>
    );
  }
  
  export default Logo;