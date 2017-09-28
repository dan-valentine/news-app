import React, { Component } from 'react';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';
import saveIcon from './../../../../images/ic_bookmark_border_black_24px.svg'
import savedIcon from './../../../../images/ic_bookmark_black_24px.svg'
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

        const {
            FacebookShareButton,
            GooglePlusShareButton,
            TwitterShareButton,
            EmailShareButton,
          } = ShareButtons;

        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');
        const GooglePlusIcon = generateShareIcon('google');
        const EmailIcon = generateShareIcon('email');

        return (
            <div className='article_container'>
                <a className='article_link' href={this.state.article.url} target='_blank' >
                    <h3>{this.state.article.title}</h3>
                    {
                        this.state.article.urlToImage
                            ?
                            <img className='article_img' src={this.state.article.urlToImage} alt={this.state.article.title} />
                            :
                            <img className='article_img' src={this.state.article.urltoimage} alt={this.state.article.title} />

                    }
                </a>
                <div className='social_actions'>
                    {
                        savedArticle
                            ?
                            <img src={savedIcon} onClick={() => this.props.removeStory(savedArticle.saved_news_articles_id)} />
                            :
                            <img src={saveIcon} onClick={() => this.props.saveStory(this.state.article)} />
                    }
                    <FacebookShareButton url={this.state.article.url} title={this.state.article.title} description={this.state.article.description}
                        picture={
                            this.state.article.urlToImage
                                ?
                                this.state.article.urlToImage
                                :
                                this.state.article.urltoimage

                        }>
                        <FacebookIcon size={24} round={false} />
                    </FacebookShareButton>

                    <TwitterShareButton url={this.state.article.url} title={this.state.article.title}>
                        <TwitterIcon size={24} round={false} />
                    </TwitterShareButton>

                    <GooglePlusShareButton url={this.state.article.url} title={this.state.article.title} description={this.state.article.description} >
                        <GooglePlusIcon size={24} round={false} />
                    </GooglePlusShareButton>
                    <EmailShareButton title={this.state.article.title} subject={this.state.article.title} url={this.state.article.url}>
                        <EmailIcon size={24} round={false} />
                    </EmailShareButton>
                </div>
                <a className='article_link' href={this.state.article.url} target='_blank' >
                    {this.state.article.author && <h5>By: {this.state.article.author} </h5>}
                    <h4>{this.state.article.description}</h4>
                </a>

            </div>
        );
    }
}