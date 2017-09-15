import React, { Component } from 'react';
import axios from 'axios';
import NewsOutlet from './NewsOutlet/NewsOutlet';
import './NewsSources.css';

export default class Sources extends Component {
    constructor(props){
        super(props);
        this.state = {
            sources: [],
            filteredSources: [],
            searchTerms: '',
            followedOutlets: props.followedOutlets,
            showSources: props.showSources
        }
        // console.log(props);
    }
    componentDidMount(){
        axios.get('https://newsapi.org/v1/sources?language=en').then(resp =>{
            this.setState({
                sources: resp.data.sources,
                filteredSources: resp.data.sources
            });
        }).catch(err => console.log("failly fail" + err));
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            followedOutlets: nextProps.followedOutlets,
            showSources: nextProps.showSources
        });
    }
    changeSearchTerm(val){
        val = val.toLowerCase();
        let tempFilteredArr = this.state.sources.filter(source => 
            (source.name.toLowerCase().includes(val) || source.description.toLowerCase().includes(val)))
        this.setState({
            searchTerms: val,
            filteredSources: tempFilteredArr
        })

    }
    render () {
        let newsOutletArr = this.state.filteredSources.map((outlet, i) => 
            <NewsOutlet 
                key={i} 
                newsOutlet={outlet}
                followedOutlets ={this.state.followedOutlets}
                followOutlet={this.props.followOutlet}
                unfollowOutlet={this.props.unfollowOutlet}
                />
        )
        return (
            <div className={this.state.showSources ? "outlets_container show_sources" : "outlets_container"} >
                <div>
                    <span>
                        <input 
                            onChange={e => this.changeSearchTerm(e.target.value)}
                            type='text'
                            value={this.state.searchTerms} 
                            placeholder='Search Outlets'/>
                    </span>
                </div>
                {newsOutletArr}
            </div>
        );
    }
}