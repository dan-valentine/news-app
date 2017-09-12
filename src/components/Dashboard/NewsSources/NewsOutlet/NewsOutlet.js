import React, {Component} from 'react';
import './NewsOutlet.css';

export default class NewsOutlet extends Component{
    
    
    render(){
        let body= {
            sourceID: this.props.newsOutlet.id,
            name: this.props.newsOutlet.name,
            description: this.props.newsOutlet.description,
            url: this.props.newsOutlet.url
        }
        // console.log(this.props.newsOutlet)
        return (
            <div className='outlet_container'>
                <h3>{this.props.newsOutlet.name}</h3>
                <h4>{this.props.newsOutlet.description}</h4>
                {
                    this.props.followedOutlets.filter((element)=> {
                        if(this.props.newsOutlet.id === element.source_id){
                            return true
                        } 
                        
                    }).length
                ?
                    
                <button onClick={_=>this.props.unfollowOutlet(this.props.newsOutlet.id)}>unfollow</button>
                :
                <button onClick={_=>this.props.followOutlet({
                    sourceID: this.props.newsOutlet.id,
                    name: this.props.newsOutlet.name,
                    description: this.props.newsOutlet.description,
                    url: this.props.newsOutlet.url
                })}>Follow</button>
                }
            </div>
        )
    }
}