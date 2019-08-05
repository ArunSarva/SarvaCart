import React, { Component } from 'react';
import { Nav,Navbar, Form,FormControl,Button } from 'react-bootstrap';
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
            <Button className="search_btn" onClick={this.Search}><img className="search_icon" src={require('../Image/search.png')} alt="Logo image"  /></Button>
            {/* <input className="search_icon" type="submit" value="" /> */}
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link href="./Signup">SignUp</Nav.Link>
            <Nav.Link href="./">Login</Nav.Link>
            <Nav.Link className="Nav_signup" href="/Cart1">cart<img className="Cart"  src={require('../Image/cart.png')} alt="Card image"  /></Nav.Link>
          </Nav>  
          </Navbar.Collapse>        
        </Navbar>				
			</div>
		);
	}
}
export default Navbar1;