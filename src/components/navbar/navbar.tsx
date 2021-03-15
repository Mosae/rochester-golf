import React from 'react';
import './navbar.css';
function navbar() {
	return (
		<div className="navbar__wrapper">
			<ul className="nav__ul">
				<li>
					<a href="/">Rochester Golf</a>
				</li>
				<li className="nav__right">
					<a href="/">Contact us</a>
				</li>
			</ul>
		</div>
		// <div className="navbar__wrapper">
		// 	<p className="navbar__logo">Rochester Golf</p>
		// </div>
	);
}

export default navbar;
