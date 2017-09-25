import React, { Component } from 'react';
import axios from 'axios';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
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
            },()=>{
                this.forceUpdate();
                console.log("data reciceved");
            })
        })
    }
    componentWillReceiveProps(nextProps){
        axios.get(`https://newsapi.org/v1/articles?source=${nextProps.outlet.source_id}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`).then(resp =>{
            this.setState({
                articles: resp.data.articles
            },()=>{
                this.forceUpdate();
                console.log("data re-reciceved");
            })
        })
    }

    render () {
        
        let articlesArr = this.state.articles.map((article, i) => <NewsArticle key={i} article={article}/>);
        const images = [
            "https://unsplash.it/200/300?image=1050",
            "https://unsplash.it/400/400?image=1039",
            "https://unsplash.it/400/300?image=1017",
            "https://unsplash.it/200/200?image=997",
            "https://unsplash.it/500/400?image=287",
            "https://unsplash.it/400/500?image=955",
            "https://unsplash.it/200/300?image=916",
            "https://unsplash.it/300/300?image=110",
            "https://unsplash.it/300/300?image=206",
        ];

        return (
            <div className='news_panel_container'>
                <div className='news_panel_title'>
                    <h2>{this.props.outlet.name}</h2>
                    <h3>{this.props.outlet.description}</h3>
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        	        <Masonry gutter="10px">
                        {articlesArr}
                       
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            
        );
    }
}