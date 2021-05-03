import React from 'react';

// Components
import Feature from './Feature';

// CSS
import './style.scss';
import iconOnline from '../../../docs/easybank-landing-page-master/images/icon-online.svg';
import iconBudgeting from '../../../docs/easybank-landing-page-master/images/icon-budgeting.svg';
import iconOnBoarding from '../../../docs/easybank-landing-page-master/images/icon-onboarding.svg';
import iconApi from '../../../docs/easybank-landing-page-master/images/icon-api.svg';

function SecondSection() {
    return (
      <section className="secondSection">
        <article className="secondSection__article">
            <h1 className="secondSection__article__title">Why choose Easybank?</h1>
            <p className="secondSection__article__paragraph">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </article>
        <section className="secondSection__features">
            <Feature imgAlt="icon-online" imgSrc={iconOnline} featureTitle="Online Banking" featureParagraph="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."/>
            <Feature imgAlt="icon-budgeting" imgSrc={iconBudgeting} featureTitle="Simple Budgeting" featureParagraph="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."/>
            <Feature imgAlt="icon-onboarding" imgSrc={iconOnBoarding} featureTitle=" Fast Onboarding" featureParagraph="We don't do branches. Open your account in minutes online and start taking control of your finances right away."/>
            <Feature imgAlt="icon-api" imgSrc={iconApi} featureTitle="Open API" featureParagraph="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."/>
        </section>
      </section>
    );
  }
  
  export default SecondSection;