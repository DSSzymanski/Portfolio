import React from 'react';
import {ProfileTextBoxItems} from './ProfileTextBoxItems';
import '../../App.css';
import './ProfileTextBoxes.css';

function ProfileTextBoxes() {
	return (
		<ul className='profile-textbox-list'>
			{
				ProfileTextBoxItems.map((item, index) => {
					if(item.cName === "profile-textbox-right"){
						return (
							<li key={index} className={item.cName}>	
								<div className="profile-textbox-image">
									<img src={item.image} alt={item.image_alt} width='500px'/>
								</div>
								<div className="profile-textbox-container">
									<h3>{item.title}</h3>
									<div className='profile-textbox-text'>
										{item.details}
									</div>
								</div>
							</li>
						);
					}
					else{
						return (
							<li key={index} className={item.cName}>	
								<div className="profile-textbox-container">
									<h3>{item.title}</h3>
									<div className='profile-textbox-text'>
										{item.details}
									</div>
								</div>
								<div className="profile-textbox-image">
									<img src={item.image} alt={item.image_alt} width='500px'/>
								</div>
							</li>
						);
					}
				})
			}
		</ul>
	);
}

export default ProfileTextBoxes;