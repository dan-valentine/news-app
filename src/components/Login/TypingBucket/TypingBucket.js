import React, { Component } from 'react';
import Typing, {Backspace, Delay, Speed} from 'react-typing-animation';
import './TypingBucket.css';

export default class TypingBucket extends Component {
    constructor() {
        super();
        this.state = {
            phrases: ['Make Your News Stories Easily Accessible!',
                'Save News Stories!',
                'Share News Stories!',
                'Educate Yourself!',
                'See A Wide Variety Of Views!',
                'Keep Up To Date On Trump\'s Tweets!',
            ]
        }
    }
    render() {
        let PhrasesArr = this.state.phrases.map((phrase, i) => {
            return (
                <span key={i}>
                    <Speed ms={150} />
                    {phrase}
                    <Backspace count={phrase.length} delay={500} speed={50} />
                    <Delay ms={250} />
                </span>
            )
        })
        return (
            <div className='typing_bucket_container'>

                {
                    PhrasesArr.length
                    &&
                    <Typing loop={true} speed={150}>
                        <span>Use News Bucket To</span>
                        <br />
                        {PhrasesArr}
                    </Typing>
                }



            </div>
        );
    }
}