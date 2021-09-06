import React from 'react';
import './ProjectCards.css';
import Card from './Card';
import {CardItems} from '../Card/CardItems';
import '../../App.css';

function ProjectCards() {
	return (
		<>
			<h1 className="ProjectsHeader">Projects</h1>
			<div className="ProjectCards">
				<ul className="card-list">
					{
						CardItems.map((item, index) => {
							return (
								<li key={index} className="card-container">
									<Card item={item}/>
								</li>
							)
						})
					}
				</ul>
			</div>
		</>
	);
}

export default ProjectCards;