import React from "react";
import { Link } from "react-router-dom";
import starWars from '../../img/star-wars-logo.png'


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light w-100 mb-3">
			<Link to="/">
				<span className="navbar-brand ms-5 mb-0 h1">
					<img src={starWars}/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-4">favorites</button>
				</Link>
			</div>
		</nav>
	);
};