import React from 'react';

// Components
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

// CSS
import './style.scss';

function Main() {
    return (
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </main>
    );
  }
  
  export default Main;