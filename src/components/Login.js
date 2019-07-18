import React, { Component } from 'react';
// import { connect} from "react-redux";
import './CSS/Login.css';
import { Form } from 'react-bootstrap';

import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Login extends Component {
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
				{/* <Button color="primary" onClick={this.toggleModal.bind(this)}>Login</Button> */}
				<Modal isOpen={this.state.modalIsOpen}>
				<ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>
				<ModalBody>
				<Form>
					<Form.Group controlId="formBasicEmail">
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
				</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary">Login</Button>
					<Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
				</ModalFooter>
				</Modal>
			</Container>
		);
	}
}
    export default Login;