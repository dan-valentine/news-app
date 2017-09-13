import React, { Component } from 'react';
import NewsSources from './NewsSources/NewsSources';
import NewsPanel from './NewsPanel/NewsPanel';
import Header from './../Header/Header';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            followedOutlets: []
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

    followOutlet(body){
        console.log(body)
        axios.post('/api/news_sources', body).then(resp =>{
            axios.get('/api/news_sources').then(resp =>{
                this.setState({
                    followedOutlets: resp.data
                });
            });
        });
    }

    unfollowOutlet(body){
        console.log(JSON.stringify(body));
        let {sourceID} = body;
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
            <div>
                <Header/>
                <NewsSources 
                    followedOutlets={this.state.followedOutlets}
                    followOutlet={this.followOutlet}
                    unfollowOutlet={this.unfollowOutlet}/>
                {newsPanelArr}
            </div>
        );
    }
}