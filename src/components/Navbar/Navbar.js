import React, {Component} from 'react';
import {NavItems} from './NavItems';
import './Navbar.css';

class Navbar extends Component {
	state = { menuClicked: false };

	handleClick = () => {
		this.setState({ menuClicked: !this.state.menuClicked });
	}

	render() {
		return (
			<nav className="NavbarItems	">
				<h1 className="logo">
					DSS
				</h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.menuClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.menuClicked ? 'nav-menu active' : 'nav-menu'}>
					{NavItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}
}

export default Navbar