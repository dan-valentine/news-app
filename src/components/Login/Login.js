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

                <div className='main_container'>
                    <div className='parallax_1'>
                        <TypingNews/>
                        {/* <img className='paralaxed_img' src={newsPaper} alt='newsPaper' /> */}

                    </div>
                    <div className='landing_container'>
                        <h2>Throw all your news in a bucket</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='parallax_2'>

                        {/* <img className='paralaxed_img' src={satellite} alt='satellite' /> */}

                    </div>
                    <div className='landing_container'>
                        <h2>Throw all your news in a bucket</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='parallax_3'>
                        {/* <img className='paralaxed_img' src={newsCamera} alt='news Camera' /> */}

                    </div>
                    <div className='landing_container'>
                        <h2>Throw all your news in a bucket</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
            </div>
        );
    }
}