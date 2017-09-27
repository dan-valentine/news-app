import React, { Component } from 'react';
import axios from 'axios';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import NewsArticle from '../NewsPanel/NewsArticle/NewsArticle';
import Header from '../../Header/Header';
import './SavedStories.css'

export default class SavedStories extends Component {
    constructor(){
        super();
        this.state = {
            savedStories: []
        }
        this.removeStory = this.removeStory.bind(this);
        this.saveStory = this.saveStory.bind(this);
    }

    componentDidMount(){
        axios.get('/api/saved_stories').then(resp =>{
            console.log(resp);
            this.setState({
                savedStories: resp.data
            });
        });
    }

    removeStory(savedNewsArticleId){
        axios.delete(`api/saved_stories/${savedNewsArticleId}`).then(resp=>{
            this.setState({
                savedStories: resp.data
            });
        })
    }

    saveStory(article){
        axios.post('/api/saved_stories', article).then(resp=>{
            this.setState({
                savedStories: resp.data
            });
        })
    }

    render () {
        let articlesArr = this.state.savedStories.map((article, i) => 
            <NewsArticle 
            key={i} 
            article={article}
            saveStory={this.saveStory}
            removeStory={this.removeStory}
            savedStories={this.state.savedStories}/>
        );
        
        return (
            
            <div className='saved_container'>
                <Header/>
                <div className='saved_articles_container'>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry gutter="10px">
                            {articlesArr}
                        
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        );
    }
}