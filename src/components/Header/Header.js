import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(user) {
    return (
        <div>
            <div>
                <Link to='/dashboard'>Home</Link>
                <Link to='/edit'>edit</Link>
            </div>
            <div>
                <Link to='/'>Logout</Link>
            </div>
        </div>
    );
}