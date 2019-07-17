import React, { Component } from 'react';
import './CSS/Signup.css'
import { Form } from 'react-bootstrap';

import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component {
    state = {
		visible: true,
		modalIsOpen: true
	  }
	toggleModal() {
		this.setState({
		  modalIsOpen: ! this.state.modalIsOpen
		});
	  }
    render() {
        return (
			<Container>
			<Button color="primary Sign_up" onClick={this.toggleModal.bind(this)}>Signup</Button>
			<Modal isOpen={this.state.modalIsOpen}>
			<ModalHeader toggle={this.toggleModal.bind(this)}>Register</ModalHeader>
			<ModalBody>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button color="primary Signup_btn">Signup</Button>
				<Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>							
			</Form>
			</ModalBody>
			{/* <ModalFooter>
			<button  className="Register" > Register </button>
	<button  className="Cancel" > Cancel </button>
			</ModalFooter> */}
			</Modal>
		</Container>
        );
    }
}

export default Signup;