import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button,Nav,Navbar, Form,FormControl } from 'react-bootstrap';
// import browserHistory from "../util/browserHistory"
import sarva from '../Image/sarva-logo.png'
import './CSS/Navbar.css';

class Navbar1 extends Component {
	render() {
		return (
			<div>
				<Navbar className="Nav_bar" bg="primary" variant="dark">
          <Navbar.Brand href="#home">Sarva</Navbar.Brand>
          <Form inline className="Nav_signup ">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav className="mr-auto ">
            <Nav.Link className="Nav_signup" href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing"><img className="Cart"  src={require('../Image/cart.png')} alt="Card image"  /></Nav.Link>
          </Nav>
          
        </Navbar>

				
			</div>
		);
	}
}

export default Navbar1;