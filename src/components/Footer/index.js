import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../Button';
import Logo from '../Header/Logo';

// CSS
import './style.scss';

// IMG
import facebook from '../../docs/easybank-landing-page-master/images/icon-facebook.svg';
import youtube from '../../docs/easybank-landing-page-master/images/icon-youtube.svg';
import twitter from '../../docs/easybank-landing-page-master/images/icon-twitter.svg';
import pinterest from '../../docs/easybank-landing-page-master/images/icon-pinterest.svg';
import instagram from '../../docs/easybank-landing-page-master/images/icon-instagram.svg';
import logoWhite from '../../docs/easybank-landing-page-master/images/logo-white.svg';

function Footer({logoClassName, logoSrc}) {
    return (
      <footer className="footer">
        <div className="footer__logoList">
          <Logo logoClassName={"footer__logoList__logo"} logoSrc={logoWhite} />
          <ul className="footer__logoList__socialMedia">
            <li>
              <img alt="facebook" src={facebook}/>
            </li>
            <li>
              <img alt="youtube" src={youtube}/>
            </li>
            <li>
              <img alt="twitter" src={twitter}/>
            </li>
            <li>
              <img alt="pinterest" src={pinterest}/>
            </li>
            <li>
              <img alt="instagram" src={instagram}/>
            </li>
          </ul>
        </div>
        <div className="footer__navLinksContainer">
          <ul className="footer__navLinksContainer__navLinks">
            <li className="footer__navLinksContainer__navLinks__item">
              <Link to="#">About Us</Link>
            </li>
            <li className="footer__navLinksContainer__navLinks__item">
              <Link to="#">Contact</Link>
            </li>
            <li className="footer__navLinksContainer__navLinks__item">
              <Link to="#">Blog</Link>
            </li>
            <li className="footer__navLinksContainer__navLinks__item">
              <Link to="#">Careers</Link>
            </li>
            <li className="footer__navLinksContainer__navLinks__item">
              <Link to="#">Support</Link>
            </li>
            <li className="footer__navLinksContainer__navLinks__item">
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__buttonAndCopyrightContainer">
          <Button />
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;