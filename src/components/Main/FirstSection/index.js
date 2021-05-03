import React from 'react';

// Components
import Button from '../../Button';

// CSS
import './style.scss';
import backgroundImage from '../../../docs/easybank-landing-page-master/images/bg-intro-desktop.svg';
import mockups from '../../../docs/easybank-landing-page-master/images/image-mockups.png';

function FirstSection() {
    return (
      <section className="firstSection">
        <article className="firstSection__article">
            <h1 className="firstSection__article__title">Next generation digital banking</h1>
            <p className="firstSection__article__paragraph">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button buttonClass={"firstSection__article__button"}/>
        </article>
        <div>
            <img className="firstSection__bgImg" alt="background" src={backgroundImage}/>
            <img className="firstSection__bgMokups" alt="mockups" src={mockups}/>
        </div>
      </section>
    );
  }
  
  export default FirstSection;