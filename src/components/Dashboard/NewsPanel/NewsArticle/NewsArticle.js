import React from 'react';
import './NewsArticle.css';

export default function NewsArticle(article){
    return (
        <div className='article_container'>
            <a className='article_link' href={article.article.url} target='_blank' >
                <div className='article_info'>
                    <h3>{article.article.title}</h3>
                    {article.article.author ?<h5>by: {article.article.author} </h5>:<p></p>}
                    <img className='article_img' src={article.article.urlToImage} alt={article.article.title}/> 
                    <h4>{article.article.description}</h4>
                </div>
            </a>
        </div>    
    );
}