import React, {Component} from 'react';
import './NewsArticle.css';

export default class NewsArticle extends Component{
    constructor(props){
        super(props);
        this.state = {
            article: props.article
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            article: nextProps.article
        });
    }

    render(){
        return (
            <div className='article_container'>
                <a className='article_link' href={this.state.article.url} target='_blank' >
                    <div className='article_info'>
                        <h3>{this.state.article.title}</h3>
                        {this.state.article.author ?<h5>by: {this.state.article.author} </h5>:<p></p>}
                        <img className='article_img' src={this.state.article.urlToImage} alt={this.state.article.title}/> 
                        <h4>{this.state.article.description}</h4>
                    </div>
                </a>
            </div>    
        );
    }
}