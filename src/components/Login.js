import React, { Component } from 'react';
// import { connect} from "react-redux";
import './CSS/Login.css';
import { Form } from 'react-bootstrap';
import api from '../Api/Index';
import browserHistory from '../util/browserHistory';

import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Login extends Component {
	constructor(props) {
        super(props)

        this.state = {
            visible: true,
			modalIsOpen: true,
			Email: '',
			Password: '',
			Email_message:"",
			Password_message:''
        }
	}
	// state = {
	// 	visible: true,
	// 	modalIsOpen: true
	//   }
	  AddUser = async () => {
        const { Email,Password } = this.state
		const payload = { Email,Password}
		const Email_pattran=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/;
		const reg_pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
		debugger;
		let a=0;
		if(this.state.Email===null||!Email_pattran.test(this.state.Email))
			{
				if(!this.state.Email)
				{
					a=1;
					const Email_message = "Email is empty"
					this.setState({ Email_message })
				}
				 else {
					 a=1;
					const Email_message = "Invalid Email"
					this.setState({ Email_message })
				}
			}
			if(this.state.Password===null || !reg_pass.test(this.state.Password) )
			{
				if(!this.state.Password)
				{
					a=1;
					const Password_message = "password is empty "
					this.setState({ Password_message })
				}
				else {
					a=1;
					const Password_message = "Invalid password"
					this.setState({ Password_message })
				}
			}
			
			if(a==0){
        await api.Login(payload).then(res => {
			// window.alert()
			
            this.setState({
                Email: '',
                Password: '',
			})
			browserHistory.push("/home");
		})

		.catch(res =>
			{browserHistory.push("/");}
		)
		
		}
	}

    handleChangeInputPassword = async event => {
        const Password =  event.target.value
        this.setState({ Password })
    }

    handleChangeInputEmail = async event => {
        const Email = event.target.value
        this.setState({ Email })
    }
	toggleModal() {
		this.setState({
		  modalIsOpen: ! this.state.modalIsOpen
		});
	  }
	render() {
		const { email, Password } = this.state

		return (
			<Container>
				
				{/* <Button color="primary" onClick={this.toggleModal.bind(this)}>Login</Button> */}
				<Modal isOpen={this.state.modalIsOpen}>
				<ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>
				<ModalBody>
				<Form onSubmit={this.AddUser}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" onChange={this.handleChangeInputEmail} value= {email} placeholder="Enter email" />
						<span>{this.state.Email_message}</span>
						<Form.Text className="text-muted">
						We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" onChange={this.handleChangeInputPassword} value= {Password} placeholder="Password" />
						<span>{this.state.Password_message}</span>
					</Form.Group>
				</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.AddUser} >Login</Button>
					<Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
				</ModalFooter>
				</Modal>
			</Container>
		);
	}
}
    export default Login;