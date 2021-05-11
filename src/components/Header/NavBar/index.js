import React, { useState } from 'react';

// CSS
import './style.scss';

function NavBar() {
  // un state qui permettra de gérer l'affichage du menu burger en vue mobile
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  }

    return (
      <>
      <div className={`${showLinks ? "modal" : "hideModal"}`}>
      </div>
        <nav className={`navbar ${showLinks ? "showNavBar" : "hideNavBar"}`}>
        {/* la classe hideNavBar n'existe pas, il s'agit simplement d'éviter qu'apparaisse
        un false en nom de classe */}
          <ul className="navbar__itemList">
              <li className="navbar__itemList__item slideInDown-1">Home</li>
              <li className="navbar__itemList__item slideInDown-2">About</li>
              <li className="navbar__itemList__item slideInDown-3">Contact</li>
              <li className="navbar__itemList__item slideInDown-4">Blog</li>
              <li className="navbar__itemList__item slideInDown-5">Careers</li>
          </ul>
          <button className="navbar__burger" onClick={handleShowLinks}>
            <span className="navbar__burger__bar"></span>
          </button>
        </nav>
      </>  
    );
  }
  
  export default NavBar;