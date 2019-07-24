import React, { Component } from 'react';
import './CSS/Signup.css';
import { Form,ModalFooter } from 'react-bootstrap';
import api from '../Api/Index'

import { Col,Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Signup extends Component {
	constructor(props) {
        super(props)

        this.state = {
            visible: true,
			modalIsOpen: true,
			Name: '',
			Email: '',
			Password: '',
			Name_message:"",
			Email_message:"",
			Password_message:""
        }
	}
	AddUser = async () => {
        const { Name,Email,Password } = this.state
		const payload = { Name,Email,Password}
		const reg="/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/";
		const reg_pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
		if(this.state.Email===''&&this.state.Name===""&& this.state.Password==="" ){
			if(this.state.Email===''||reg.test(this.state.Email))
			{
				if(this.state.Email==='')
				{
					this.state.Email_message="Email cnt be empty"
				}
				else{
					this.state.Email_message="Email Not valid"
				}
			}
			else if(this.state.Password===''&& reg_pass.test(this.state.Password) )
			{
				if(this.state.Password==='')
				{
					this.state.Password_message="Password should not be empty";
				}
				else{
					this.state.Password_message="Password pattron not match";
				}
			}
			else{
				this.state.Name_message="Name should not be empty";
			}
		}
else{
        await api.signup(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                Name: '',
                Email: '',
                Password: '',
            })
		})
		
		}
	}
    // state = {
	// 	visible: true,
	// 	modalIsOpen: true,
	// 	Name: '',
    //     Email: '',
    //     Password: '',
	//   }
	handleChangeInputName = async event => {
        const Name = event.target.value
        this.setState({ Name })
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
		const { Name, email, Password } = this.state
		
        return (
			<Container>
			{/* <Button color="primary Sign_up" onClick={this.toggleModal.bind(this)}>Signup</Button> */}
			<Modal isOpen={this.state.modalIsOpen}>
			<ModalHeader toggle={this.toggleModal.bind(this)}>Register</ModalHeader>
			<ModalBody>
			<Form >
			<Form.Group as={Col} md="4" controlId="validationCustom01">
				<Form.Label>First name</Form.Label>
				<Form.Control
					required
					type="text"
					placeholder="Enter Name"
					onChange={this.handleChangeInputName} value={Name}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" onChange={this.handleChangeInputName} value={Name}placeholder="Name" />
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" onChange={this.handleChangeInputEmail} value= {email} placeholder="Enter email" /> 
					<Form.Text className="text-muted">
					We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" onChange={this.handleChangeInputPassword} value={Password} placeholder="Password" />
				</Form.Group>
				{/* <Button color="primary Signup_btn">Signup</Button> */}
				{/* <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>							 */}
			</Form>
			</ModalBody>
			<ModalFooter>
			<Button color="primary" onClick={this.AddUser}>Signup</Button>
			<Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
			</ModalFooter>
			</Modal>
		</Container>
        );
    }
}

export default Signup;