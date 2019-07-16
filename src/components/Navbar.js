import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import browserHistory from "../util/browserHistory"
import sarva from '../Image/sarva-logo.png'
import './CSS/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="nav-wrapper">
					<div className="container">
					<img className="brand-logo logo" src={sarva} alt="Logo" />
						<ul className="right">
							<li> 
								<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
							</li>
							<li><button class="btn" type="submit">Search</button></li>
							<li><a class="nav-link" href="#">Signup</a></li>
							<li><a class="nav-link" href="#">Login</a></li>
							<li><a class="nav-link" href="#">cart</a></li>
						</ul>
					</div>
				</nav>  
				
			</div>
		);
	}
}

export default Navbar;