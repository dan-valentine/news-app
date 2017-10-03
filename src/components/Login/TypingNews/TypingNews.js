import React, { Component } from 'react';
import Typing, {Backspace, Delay, Speed} from 'react-typing-animation';
import axios from 'axios';
import './TypingNews.css';

export default class TypingNews extends Component {
    constructor() {
        super();
        this.state = {
            sources: []
        }
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v1/sources?language=en').then(resp => {
            this.setState({
                sources: resp.data.sources
            });
        })
    }

    render() {
        let nameArr = this.state.sources.map((source, i) => {
            return (
                <span key={i}>
                    <Speed ms={150} />
                    {source.name}
                    <Backspace count={source.name.length} delay={500} speed={50} />
                    <Delay ms={250} />
                </span>
            )
        })
        return (
            <div className='typing_container'>

                {
                    nameArr.length
                    &&
                    <Typing loop={true} speed={150}>
                        <span>Get News From&nbsp;</span>
                        {nameArr}
                    </Typing>
                }



            </div>
        );
    }
}