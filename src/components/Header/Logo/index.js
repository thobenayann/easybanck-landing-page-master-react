import React from 'react';

// CSS
import './style.scss';

function Logo({ logoClassName, logoSrc }) {
    return (
      <div className="logoContainer">
        <img className={logoClassName} alt="logo" src={logoSrc} />
      </div>
    );
  }
  
  export default Logo;