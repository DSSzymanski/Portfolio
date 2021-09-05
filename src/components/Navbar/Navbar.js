import React, {useState} from 'react';
import {NavItems} from './NavItems';
import {Link} from 'react-router-dom';
import './Navbar.css';
import '../../App.css';

function Navbar() {
	const [menuClick, setMenuClick] = useState(false);

	const handleClick = () => {
		setMenuClick(!menuClick);
	}

	const closeMenu = () => {
		setMenuClick(false);
	}

	return (
		<nav className="NavbarItems	">
			<Link to={'/'} className="logo">
				<h1>DSS</h1>
			</Link>
			<div className="menu-icon" onClick={handleClick}>
				<i className={menuClick ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
				{
					NavItems.map((item, index) => {
					return (
						<li key={index}>
							<Link to={item.path} className={item.cName} onClick={closeMenu}>
								{item.title}
							</Link>
						</li>
						)
					})
				}
			</ul>
		</nav>
	);
}

export default Navbar