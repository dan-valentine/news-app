import React, { Component } from 'react';
import './NewsArticle.css';

export default class NewsArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: props.article
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            article: nextProps.article
        });
    }

    render() {
        var savedArticle = this.props.savedStories.find(article =>
            article.url == this.state.article.url
        );
        return (
            <div className='article_container'>
                    <a className='article_link' href={this.state.article.url} target='_blank' >
                        <h3>{this.state.article.title}</h3>
                        {this.state.article.author ? <h5>by: {this.state.article.author} </h5> : <p></p>}
                        {
                        this.state.article.urlToImage 
                        ? 
                            <img className='article_img' src={this.state.article.urlToImage} alt={this.state.article.title} />
                        :
                            <img className='article_img' src={this.state.article.urltoimage} alt={this.state.article.title} />

                        }
                    </a>
                    <div>
                        {
                            savedArticle
                            ?
                            <button onClick={()=> this.props.removeStory(savedArticle.saved_news_articles_id)}>Delete</button>
                            :
                            <button onClick={() => this.props.saveStory(this.state.article)}>save</button>
                        }
                    </div>
                    <a className='article_link' href={this.state.article.url} target='_blank' >
                        <h4>{this.state.article.description}</h4>
                    </a>

            </div>
        );
    }
}