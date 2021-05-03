import React from 'react';

// CSS
import './style.scss';

function Feature({ imgAlt, imgSrc, featureTitle, featureParagraph }) {
    return (
      <div className="feature">
        <img className="feature__img" alt={imgAlt} src={imgSrc} />
        <h2 className="feature__title">{featureTitle}</h2>
        <p className="feature__paragraph">{featureParagraph}</p>
      </div>
    );
  }
  
  export default Feature;