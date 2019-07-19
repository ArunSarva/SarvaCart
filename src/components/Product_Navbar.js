import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown,Dropdown } from 'react-bootstrap';
import './CSS/Product_Navbar.css'
class Product_Navbar extends Component {
	render() {
		return (
			// <div class="navbar">
					<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="./Home">SarvaCart</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
				<NavDropdown className="Nav_DropDown" title="Electronics" id="collasible-nav-dropdown">
						<NavDropdown className="Nav_DropDown" title="Mobile" id="dropdown-nav-drop-right">
						<NavDropdown.Item href="./pro">Nokia</NavDropdown.Item>
						<NavDropdown.Item href="./OnePlus">OnePlus</NavDropdown.Item>
						<NavDropdown.Item href="./Samsung">Samsung</NavDropdown.Item>
						<NavDropdown.Item href="./Moto">Moto</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown.Item href="#action/3.2">Mobile Accessories</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.4">Desktop PCs</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Tablets</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown className="Nav_DropDown" title="TVs & Appliances" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Television</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Android TVs</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Smart & Ultra HD</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Washing Machine</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown  className="Nav_DropDown" title="Men" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Watches</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Clothing</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Footwear</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Top wear</NavDropdown.Item>
					</NavDropdown>	
					<NavDropdown  className="Nav_DropDown" title="Men" id="collasible-nav-dropdown">
						<NavDropdown className="Nav_DropDown" title="watch" href="#action/3.1">
							<NavDropdown.Item>
								<Dropdown.Item eventKey="1">Action</Dropdown.Item>
								<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
								<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
								</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown.Item href="#action/3.2">Clothing</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Footwear</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Top wear</NavDropdown.Item>
					</NavDropdown>				
					
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// </div>
		);
	}
}

export default Product_Navbar;