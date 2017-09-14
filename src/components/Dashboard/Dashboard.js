import React, { Component } from 'react';
import axios from 'axios';
import NewsSources from './NewsSources/NewsSources';
import NewsPanel from './NewsPanel/NewsPanel';
import Header from './../Header/Header';
import './Dashboard.css';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            followedOutlets: [],
            showSources: false
        };

        this.followOutlet = this.followOutlet.bind(this);
        this.unfollowOutlet = this.unfollowOutlet.bind(this);
    }
    componentDidMount(){
        axios.get('/api/news_sources').then(resp =>{
            this.setState({
                followedOutlets: resp.data
            });
        });
    }

    showSources(){
        this.setState({
            showSources: true
        });
    }

    hideSources(){
        this.setState({
            showSources: false
        });
    }

    followOutlet(body){
        axios.post('/api/news_sources', body).then(resp =>{
            axios.get('/api/news_sources').then(resp =>{
                this.setState({
                    followedOutlets: resp.data
                });
            });
        });
    }

    unfollowOutlet(sourceID){
        axios.delete(`/api/news_sources?sourceID=${sourceID}`).then(_ =>{
            axios.get('/api/news_sources').then(resp =>{
                this.setState({
                    followedOutlets: resp.data
                });
            });
        });
    }

    render () {
        let newsPanelArr = this.state.followedOutlets.map((outlet, i )=> 
            <NewsPanel 
                key={i} 
                outlet={outlet} />
        )
        return (
            <div className='dashboard_container'>
                <Header/>
                <div>
                    {
                        this.state.showSources
                        ? 
                        <button className='show_sources_btn' onClick={_=>this.hideSources()}>&larr; Hide Sources </button>
                        : 
                        <button className='show_sources_btn' onClick={_=>this.showSources()}>Show Sources &rarr;</button>
                    }
                    </div>
                <div className="container">
                    <NewsSources
                        showSources={this.state.showSources}
                        followedOutlets={this.state.followedOutlets}
                        followOutlet={this.followOutlet}
                        unfollowOutlet={this.unfollowOutlet}/>
                    <div className={'news_panels_container ' + (this.state.showSources ? 'hidden_panel' :'full_panel')} > 
                        {
                        newsPanelArr.length > 0
                        ? 
                        newsPanelArr
                        : 
                        <div className="empty_news_panel_holder">
                            <div className='empty_news_panel_holder_text'>
                                <p>Once You follow a news outlet your stories will display here!</p>
                            </div>    
                        </div> 
                        
                        }
                    </div>
                </div>
            </div>
        );
    }
}