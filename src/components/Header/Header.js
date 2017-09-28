import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import home from './../../images/home.png';
import setting from './../../images/setting.png';
import saveIcon from './../../images/ic_bookmark_border_white_24px.svg'

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
                <Link className='link' to='/save'>
                    <img className='setting_icon' src={saveIcon} alt='saved'/>
                </Link>
            </div>
            <h1>BucketHead News</h1>
            <div className='logout_container'>
                <a className='link' href={process.env.REACT_APP_LOGOUT}>Logout</a>
            </div>
        </div>
    );
}