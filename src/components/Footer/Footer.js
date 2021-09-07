import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <Link to='/' className='footer-link'>About</Link>
            <div className='separator'>::</div>
            <Link to='/projects' className='footer-link'>Projects</Link>
            <div className='separator'>::</div>
            <Link to='/contact' className='footer-link'>Contact Info</Link>
            <div className='separator'>::</div>
            <a href='https://github.com/DSSzymanski' className='footer-link'>
                <img src='images/Github-Mark-Light-32px.png' alt='Github'></img>
            </a>
            <div className='separator'>::</div>
			<a href='https://www.linkedin.com/in/dsszymanski/' className='footer-link'>LinkedIn</a>
        </div>
    );
}

export default Footer