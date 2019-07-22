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
				<NavDropdown className="Nav_DropDown Nav_start" title="Electronics" id="collasible-nav-dropdown">
						<NavDropdown className="dropdown-button-drop-right" title="Mobile" id="dropdown-nav-drop-right">
						<NavDropdown.Item href="./Nokia">Nokia</NavDropdown.Item>
						<NavDropdown.Item href="./OnePlus">OnePlus</NavDropdown.Item>
						<NavDropdown.Item href="./Samsung">Samsung</NavDropdown.Item>
						<NavDropdown.Item href="./Honor">Honor</NavDropdown.Item>
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
					<NavDropdown  className="Nav_DropDown" title="Clothing" id="collasible-nav-dropdown">
						<NavDropdown className="Nav_DropDown" title="Men" href="#action/3.1">
							<NavDropdown.Item>
							<Dropdown.Item eventKey="2">watch</Dropdown.Item>
								<Dropdown.Item eventKey="1">Clothing</Dropdown.Item>
								<Dropdown.Item eventKey="2">Top wear</Dropdown.Item>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown className="Nav_DropDown" title="Women" href="#action/3.1">
							<NavDropdown.Item>
							<Dropdown.Item eventKey="2">Watch</Dropdown.Item>
								<Dropdown.Item eventKey="1">Clothing</Dropdown.Item>
								<Dropdown.Item eventKey="2">Top wear</Dropdown.Item>
							</NavDropdown.Item>
						</NavDropdown>
					</NavDropdown>				
					
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// </div>
		);
	}
}

export default Product_Navbar;