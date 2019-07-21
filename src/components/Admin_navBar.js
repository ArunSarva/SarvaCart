import React, { Component } from 'react';
import { Nav,Navbar} from 'react-bootstrap';

class Admin_navBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="Nav_bar " bg="primary" variant="dark">
                    <Navbar.Brand href="./Home">Sarva</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav >
                        <Nav.Link href="./Home">Logout</Nav.Link>
                    </Nav>  
                    </Navbar.Collapse>        
                </Navbar>			
            </div>
        );
    }
}

export default Admin_navBar;