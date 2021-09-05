import React from 'react';
import {ProfileTextBoxItems} from './ProfileTextBoxItems';
import '../../App.css';
import './ProfileTextBoxes.css';

function ProfileTextBoxes() {
	return (
		<ul className='profile-textbox-container'>
			{
				ProfileTextBoxItems.map((item, index) => {
					return (
						<li key={index} className={item.cName}>
							<h3>{item.title}</h3>
							<div className='profile-textbox-text'>
								{item.details}
							</div>
						</li>
					);
					})
				}
		</ul>
	);
}

export default ProfileTextBoxes;