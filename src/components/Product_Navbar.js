import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import './CSS/Product_Navbar.css'
class Product_Navbar extends Component {
	render() {
		return (
			// <div class="navbar">
					<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="#home">SarvaCart</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
				<NavDropdown className="Nav_DropDown" title="Electronics" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Mobiles</NavDropdown.Item>
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
					<NavDropdown className="Nav_DropDown" title="Home & Furniture" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Kitchen, Cookware & Serveware</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Home Decor</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Tableware & Dinnerware</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Furnishing</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown className="Nav_DropDown" title="Sports, Books & More" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Food Essentials</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Gaming</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Auto Accessories</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown className="Nav_DropDown" title="Baby & Kids" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Kids Clothing</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Boys' Clothing</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Toys</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Baby Care</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// </div>
		);
	}
}

export default Product_Navbar;