import React, { Component } from 'react';
import NewsOutlet from './NewsOutlet/NewsOutlet';
import axios from 'axios';

export default class Sources extends Component {
    constructor(props){
        super(props);
        this.state = {
            sources: [],
            followedOutlets: props.followedOutlets
        }
        // console.log(props);
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v1/sources?language=en').then(resp =>{
            this.setState({
                sources: resp.data.sources
            });
        }).catch(err => console.log("failly fail" + err));
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            followedOutlets: nextProps.followedOutlets
        });
    }
    render () {
        let newsOutletArr = this.state.sources.map((outlet, i) => 
            <NewsOutlet 
                key={i} 
                newsOutlet={outlet}
                followedOutlets ={this.state.followedOutlets}
                followOutlet={this.props.followOutlet}
                unfollowOutlet={this.props.unfollowOutlet}
                />
        )
        return (
            <div>
                {newsOutletArr}
            </div>
        );
    }
}