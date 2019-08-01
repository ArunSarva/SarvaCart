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
          <Navbar.Brand className="brand" href="./Home"><img className="logo"  src={require('../Image/logo.jpg')} alt="Logo image"  />
       </Navbar.Brand>
          <Form >
            <FormControl type="text" placeholder="Search" className=" search" />
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          {/* <input type="text" placeholder="Search" className="search" name="name" /> */}
          {/* <Form >
            <FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
          </Form> */}
          <Nav >
            <Nav.Link className="Nav_signup" href="./Signup">SignUp</Nav.Link>
            <Nav.Link href="./">Login</Nav.Link>
            <Nav.Link href="/Cart1"><img className="Cart"  src={require('../Image/cart.png')} alt="Card image"  /></Nav.Link>
          </Nav>  
          </Navbar.Collapse>        
        </Navbar>				
			</div>
		);
	}
}
export default Navbar1;