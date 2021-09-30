import React from 'react';
import {ProfileTextBoxItems} from './ProfileTextBoxItems';
import '../../App.css';
import './ProfileTextBoxes.css';

function ProfileTextBoxes() {
	return (
		<ul className='profile-textbox-list'>
			{
				ProfileTextBoxItems.map((item, index) => {
					return (
						<div className="profile-textbox-container" key={index}>
							<h3>{item.title}</h3>
							<div className='profile-textbox-text'>
								{item.details}
							</div>
						</div>
					);
				})
			}
		</ul>
	);
}

export default ProfileTextBoxes;