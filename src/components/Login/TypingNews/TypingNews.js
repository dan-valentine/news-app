import React, { Component } from 'react';
import Typing, {Backspace, Delay} from 'react-typing-animation';
import axios from 'axios';

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
                    {source.name}
                    <Backspace count={source.name.length} delay={500} speed={50} />
                    <Delay ms={250} />
                </span>
            )
        })
        return (
            <div>

                {
                    nameArr.length
                    &&
                    <Typing loop={true}>
                        <span>Get News From </span>
                        {nameArr}
                    </Typing>
                }



            </div>
        );
    }
}