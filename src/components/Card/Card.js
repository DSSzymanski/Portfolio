import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

function Card(props) {
	return (
		<Link className='card-body' to={props.item.path}>
			<figure className='card-image-container'>
				<img src={props.item.img} alt="Project Screenshot" className='card-image'/>
				<Tag cName='js' text='javascript'/>
			</figure>
			<h5 className='card-title'>
				{props.item.title}
			</h5>
		</Link>			
	);
}

export default Card