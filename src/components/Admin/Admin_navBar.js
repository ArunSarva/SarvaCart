import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
class Admin_navBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="Nav_bar " bg="primary" variant="dark">
          <Navbar.Brand className="brand" href="./AHome"><img className="logo" src={require('../../Image/logo.jpg')} alt="Logo image" />
          </Navbar.Brand>
          <Form >
            <FormControl type="text" placeholder="Search" className=" search" />
            <Button className="search_btn" onClick={this.Search}><img className="search_icon" src={require('../../Image/search.png')} alt="Logo image" /></Button>
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="./Ahome"><b>Home</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="./Home">SarvaCart</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className=" Nav_start1 " href="./Order">vieworder</Nav.Link>
              <Nav.Link href="./Add">AddProduct</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Admin_navBar;