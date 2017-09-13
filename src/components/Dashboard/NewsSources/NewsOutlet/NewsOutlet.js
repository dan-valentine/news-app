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
                <h3 className='outlet_title'>{this.props.newsOutlet.name}</h3>
                <h4 className='outlet_description'>{this.props.newsOutlet.description}</h4>
                <div className='button_container'>
                {
                    this.props.followedOutlets.filter((element)=> {
                        if(this.props.newsOutlet.id === element.source_id){
                            return true
                        } 
                        
                    }).length
                ?
                    
                <button className='unfollow_button' onClick={_=>this.props.unfollowOutlet(this.props.newsOutlet.id)}>unfollow</button>
                :
                <button className='follow_button' onClick={_=>this.props.followOutlet({
                    sourceID: this.props.newsOutlet.id,
                    name: this.props.newsOutlet.name,
                    description: this.props.newsOutlet.description,
                    url: this.props.newsOutlet.url
                })}>Follow</button>
                }
                </div>
            </div>
        )
    }
}