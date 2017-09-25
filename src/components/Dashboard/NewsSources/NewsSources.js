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
            searchTerm: '',
            category: '',
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
            console.log(resp.data.sources)
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
            ((this.state.category ? source.category == this.state.category : true) &&
                (source.name.toLowerCase().includes(val) || source.description.toLowerCase().includes(val))
            ));
        this.setState({
           filteredSources: tempFilteredArr,
           searchTerm: val
        })

    }
    changeCategory(val){
        let tempFilteredArr = this.state.sources.filter(source => 
            ((val ? source.category == val : true) &&
                (source.name.toLowerCase().includes(this.state.searchTerm) || source.description.toLowerCase().includes(this.state.searchTerm))
            ));
        this.setState({
           filteredSources: tempFilteredArr,
           category: val
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
                            value={this.state.searchTerm}
                            placeholder='Search Outlets'/>
                    </span>
                    <span>
                        <select onChange={e=>this.changeCategory(e.target.value)}>
                            <option value=''>all</option>
                            <option value="business">business</option>
                            <option value="entertainment">entertainment</option>
                            <option value="gaming">gaming</option>
                            <option value="general">general</option>
                            <option value="music">music</option>
                            <option value="politics">politics</option>
                            <option value="science-and-nature">science-and-nature</option>
                            <option value="sport">sport</option>
                            <option value="technology">technology</option>
                        </select>
                    </span>
                </div>
                {newsOutletArr}
            </div>
        );
    }
}