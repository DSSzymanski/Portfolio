import React from 'react';
import '../../App.css';

function Card(props) {
	return (
		<div className='card-body'>
			<figure className='card-image-container'>
				<img src={props.item.img} alt="Project Screenshot" className='card-image'/>
			</figure>
			<h5 className='card-title'>
				{props.item.title}
			</h5>
		</div>			
	);
}

export default Card