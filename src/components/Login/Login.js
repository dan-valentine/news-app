import React, { Component } from 'react';
import './Login.css';
import newsLogo from './../../news.svg';

export default class Login extends Component {
    render () {
        return (
            <div className='login_container'>
                <div className='login_box'>
                    <div className='login_logo_container'>
                        <img src={newsLogo} alt='news_logo'/>
                    </div>
                    <h1 className='login_title'>Welcome To Newsly</h1>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className='login_btn'>Login</button>
                    </a>
                </div>
            </div>
        );
    }
}