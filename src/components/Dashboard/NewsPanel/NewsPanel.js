import React, { Component } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle/NewsArticle';
import './NewsPanel.css';

export default class NewsPanel extends Component {
    constructor(){
        super();
        this.state={
            articles:[]
        }
    }
    componentDidMount(){
        axios.get(`https://newsapi.org/v1/articles?source=${this.props.outlet.source_id}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`).then(resp =>{
            this.setState({
                articles: resp.data.articles
            })
        })
    }
    componentWillReceiveProps(nextProps){
        axios.get(`https://newsapi.org/v1/articles?source=${nextProps.outlet.source_id}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`).then(resp =>{
            this.setState({
                articles: resp.data.articles
            })
        })
    }

    render () {
        
        let articlesArr = this.state.articles.map((article, i) => <NewsArticle key={i} article={article}/>)
        return (
            <div className='news_panel_container'>
                <div className='news_panel_title'>
                    <h2>{this.props.outlet.name}</h2>
                    <h3>{this.props.outlet.description}</h3>
                </div>
                {articlesArr}
            </div>
            
        );
    }
}