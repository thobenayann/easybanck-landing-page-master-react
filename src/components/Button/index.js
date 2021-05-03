import React from 'react';

// CSS
import './style.scss';

// function Button() {
//     return (
//       <div className="button">
//         <button>Request Invite</button>
//       </div>
//     );
//   }

const Button = ({
  buttonClass
}) => (
  <div className={buttonClass}>
    {/* <button type={type} onClick={event} className={buttonClass} name={name}>
      {children}
    </button> */}
    <button className="button">Request Invite</button>
  </div>
);

export default Button;