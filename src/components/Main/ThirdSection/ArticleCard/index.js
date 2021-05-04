import React from 'react';

// CSS
import './style.scss';

function ArticleCard({imgAlt, imgSrc, author, articleTitle, articleParagraph}) {
    return (
        <li className="articlesList__item">
            <img className="articlesList__item__img" alt={imgAlt} src={imgSrc}/>
            <span className="articlesList__item__author">{author}</span>
            <h3 className="articlesList__item__title">{articleTitle}</h3>
            <p className="articlesList__item__paragraph">{articleParagraph}</p>
        </li>
    )
}
  
  export default ArticleCard;