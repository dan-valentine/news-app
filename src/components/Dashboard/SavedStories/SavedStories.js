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
            savedStories: [],
            filteredStories: []
        }
        this.removeStory = this.removeStory.bind(this);
        this.saveStory = this.saveStory.bind(this);
    }

    componentDidMount(){
        axios.get('/api/saved_stories').then(resp =>{
            console.log(resp);
            this.setState({
                savedStories: resp.data,
                filteredStories: resp.data
            });
        });
    }

    removeStory(savedNewsArticleId){
        axios.delete(`api/saved_stories/${savedNewsArticleId}`).then(resp=>{
            this.setState({
                savedStories: resp.data,
                filteredStories: resp.data
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

    filter(val){
        val = val.toLowerCase();
        let tempFilteredArr = this.state.savedStories.filter(story => 
                (story.title.toLowerCase().includes(val) || story.description.toLowerCase().includes(val))
            )
        this.setState({
            filteredStories: tempFilteredArr
        })
    }

    render () {
        let articlesArr = this.state.filteredStories.map((article, i) => 
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
                    <div className='saved_Stories_filter_container'>
                        <span>Search:</span>
                        <input type='text' placeholder='type to start searching' onChange={e=> this.filter(e.target.value)}/>
                    </div>
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