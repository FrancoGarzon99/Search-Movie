import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<header className="navbar">
			<div></div>
			<nav>
				<ul className="list">
					<li className="list-item">
						<NavLink exact to="/">
							Home
						</NavLink>
						<NavLink to="/Favs">Favoritas</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
