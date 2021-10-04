import React from 'react';
import './Profile.css';
import '../../App.css';

function Profile() {
	return (
		<div className='profile-container'>
			<img className='profile-image' src='images/Profile_Picture.jpg' alt='Profile' />
			<h3>Daniel S Szymanski</h3>
			<div className="profile-link-container">
				<a href='https://github.com/DSSzymanski' className='profile-link'>Github</a>
				<a href='https://www.linkedin.com/in/dsszymanski/' className='profile-link'>LinkedIn</a>
			</div>
		</div>
	);
}

export default Profile