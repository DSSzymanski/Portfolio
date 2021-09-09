import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

function Card(props) {
	return (
		<Link className='card-body' to={props.item.path}>
			<figure className='card-image-container'>
				<img 
					src={props.item.img} 
					alt="Project Screenshot" 
					className='card-image'
					onError={(e)=>{e.target.onerror=null; e.target.src='images/Not-Found.png'}}
				/>
				<ul className="tag-list">
					{
						props.item.tags.map((tag, index) => {
							return (
								<Tag cName={tag.cName} key={index} text={tag.text} />
							)
						})
					}
				</ul>
			</figure>
			<div className="card-hover-container">
				<h5 className="card-title">
					{props.item.title}
				</h5>
				<div className="card-blurb">
					{props.item.blurb}
				</div>
			</div>
		</Link>
	);
}

export default Card