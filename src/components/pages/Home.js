import React from 'react';
import '../../App.css';
import Profile from '../Profile/Profile';
import ProfileTextBoxes from '../ProfileTextBoxes/ProfileTextBoxes';

function Home() {
	return (
		<div>
			<Profile />
			<ProfileTextBoxes />
		</div>
	);
}

export default Home;