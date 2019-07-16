import React, { Component } from 'react';
// import { connect} from "react-redux";
import './CSS/Login.css';
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
				<Button color="primary" onClick={this.toggleModal.bind(this)}>Open Modal</Button>
				<Modal isOpen={this.state.modalIsOpen}>
				<ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>
				<ModalBody>
				<form className ="login_form">
					User Name<br></br>
					<input type="text" className="inputfiled" onChange={this.handleChange} /><br></br>
					Password<br></br>
					<input type="email" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br> 
					<br></br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
				</form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary">Sign Up</Button>
					<Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
				</ModalFooter>
				</Modal>
			</Container>
		);
	}
}
    export default Login;