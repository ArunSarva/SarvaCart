import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import './CSS/Product_Navbar.css'
class Product_Navbar extends Component {
	render() {
		return (
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
							<NavDropdown.Item href="/product">Mobile Accessories</NavDropdown.Item>
							<NavDropdown.Item href="/product">Laptops</NavDropdown.Item>
							<NavDropdown.Item href="/product">Desktop PCs</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/product">Tablets</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown className="Nav_DropDown" title="TVs & Appliances" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/product">Television</NavDropdown.Item>
							<NavDropdown.Item href="/product">Android TVs</NavDropdown.Item>
							<NavDropdown.Item href="#/product">Smart & Ultra HD</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/product">Washing Machine</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Product_Navbar;