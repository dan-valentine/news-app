import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import home from './../../home.png';
import setting from './../../setting.png';

export default function Header(user) {
    return (
        <div className='header_container'>
            <div className='links_container'>
                <Link className='link' to='/dashboard'>
                    <img src={home} alt='home'/>
                </Link>
                <Link className='link' to='/edit'>
                    <img className='setting_icon' src={setting} alt='settings'/>
                </Link>
            </div>
            <h1>Newsly</h1>
            <div className='logout_container'>
                <a className='link' href={process.env.REACT_APP_LOGOUT}>Logout</a>
            </div>
        </div>
    );
}