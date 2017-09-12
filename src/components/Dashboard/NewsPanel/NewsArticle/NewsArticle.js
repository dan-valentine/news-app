import React from 'react';

export default function NewsArticle(article){
    return (
        <div>
            <a href={article.article.url} target='_blank' >
                <img src={article.article.urlToImage} alt={article.article.title}/> 
                <h3>{article.article.title}</h3>
                <h5>by {article.article.author}</h5>
                <h4>{article.article.description}</h4>
            </a>
        </div>    
    );
}