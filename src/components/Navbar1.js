import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Nav,Navbar, Form,FormControl } from 'react-bootstrap';
// import browserHistory from "../util/browserHistory"
// import sarva from '../Image/sarva-logo.png'
import './CSS/Navbar.css';

class Navbar1 extends Component {
	render() {
		return (
			<div>
				<Navbar className="Nav_bar " bg="primary" variant="dark">
          <Navbar.Brand href="#home">Sarva</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-info">Search</Button> */}
          </Form>
          <Nav >
            <Nav.Link className="Nav_signup" href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Cart<img className="Cart"  src={require('../Image/cart.png')} alt="Card image"  /></Nav.Link>
          </Nav>  
          </Navbar.Collapse>        
        </Navbar>				
			</div>
		);
	}
}

export default Navbar1;