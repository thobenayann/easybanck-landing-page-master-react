import React from 'react';

// Components
import ArticleCard from './ArticleCard';

// CSS
import './style.scss';

// IMG
import iconOnlimageCurrency from '../../../docs/easybank-landing-page-master/images/image-currency.jpg';
import imageRestaurant from '../../../docs/easybank-landing-page-master/images/image-restaurant.jpg';
import imagePlane from '../../../docs/easybank-landing-page-master/images/image-plane.jpg';
import imageConfetti from '../../../docs/easybank-landing-page-master/images/image-confetti.jpg';


function ThirdSection() {
  //imgAlt, imgSrc, author, articleTitle, articleParagraph
    return (
      <section className="thirdSection">
        <article>
            <h1 className="thirdSection__title">Latest Articles</h1>
            <ul className="thirdSection__articlesList">
                <ArticleCard imgAlt="currency" imgSrc={iconOnlimageCurrency} author="By Claire Robinson" articleTitle="Receive money in any currency with no fees" articleParagraph="The world is getting smaller and we're necoming more mobile. So why should you be forced to only receive money in a single ..."/>
                <ArticleCard imgAlt="restaurant" imgSrc={imageRestaurant} author="By Wilson Hutton" articleTitle="Treat yourself without worrying about money" articleParagraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."/>
                <ArticleCard imgAlt="plane" imgSrc={imagePlane} author="By Wilson Hutton" articleTitle="Take your Easybank card wherever you go" articleParagraph="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll event show you ..."/>
                <ArticleCard imgAlt="confetti" imgSrc={imageConfetti} author="By Claire Robinson" articleTitle="Ouyr invite-only Beta accounts are now live!" articleParagraph="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."/>
            </ul>
        </article>
      </section>
    );
  }
  
  export default ThirdSection;