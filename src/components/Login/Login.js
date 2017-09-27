import React, { Component } from 'react';
import TypingNews from './TypingNews/TypingNews';
import './Login.css';
import newsLogo from './../../images/news.svg';
import satellite from './../../images/satellite.jpeg'
import newsCamera from './../../images/newscamera.jpeg'
import newsPaper from './../../images/newspapers.jpeg'

export default class Login extends Component {
    render() {
        return (
            <div className='login_container'>
                <div className='login_box'>
                    <div className='login_logo_container'>
                        <img src={newsLogo} alt='news_logo' />
                    </div>
                    <h1 className='login_title'>Welcome To BucketHead News</h1>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className='login_btn'>Login</button>
                    </a>
                </div>
                <div>
                    <div>
                        <TypingNews/>
                        <img className='paralaxed_img' src={newsPaper} alt='newsPaper' />

                    </div>
                    <div className='landing_container'>
                        <h2>Throw all your news in a bucket</h2>
                        <p>keep all your news in one place! makes it easy to see all the news you ever want because news is really cool</p>
                    </div>
                    <div>

                        <img className='paralaxed_img' src={satellite} alt='satellite' />

                    </div>
                    <div className='landing_container'>
                        <h2>Throw all your news in a bucket</h2>
                        <p>keep all your news in one place! makes it easy to see all the news you ever want because news is really cool</p>
                    </div>
                    <div>
                        <img className='paralaxed_img' src={newsCamera} alt='news Camera' />

                    </div>
                    <div className='landing_container'>
                        <h2>Throw all your news in a bucket</h2>
                        <p>keep all your news in one place! makes it easy to see all the news you ever want because news is really cool</p>
                    </div>

                </div>
            </div>
        );
    }
}