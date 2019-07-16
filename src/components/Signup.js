import React, { Component } from 'react';
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component {
    state = {
		visible: true,
		modalIsOpen: false
	  }
	toggleModal() {
		this.setState({
		  modalIsOpen: ! this.state.modalIsOpen
		});
	  }
    render() {
        return (
            // <div>
            //     <label className="label1">Register</label>
            //     <form >
            //         <label>
            //         First Name<br></br>
            //         <input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} /><br></br>
            //         Last Name<br></br>
            //         <input type="text" name="Sname" className="inputfiled" onChange={this.handleChange} /><br></br>
            //         <br></br>
            //         User Name<br></br>
            //         <input type="text" name="Uname"  className="inputfiled" onChange={this.handleChange} /><br></br>
            //         Password<br></br>
            //         <input type="text" name="Password" className="inputfiled" onChange={this.handleChange} /><br></br>
            //         </label>      
            //     </form>
            //     <button  className="Register" > Register </button>
            //     <button  className="Cancel" > Cancel </button>
            // </div>
						<Container>
						<Button color="primary" onClick={this.toggleModal.bind(this)}>Open Modal</Button>
						<Modal isOpen={this.state.modalIsOpen}>
						<ModalHeader toggle={this.toggleModal.bind(this)}>Register</ModalHeader>
						<ModalBody>
						<form >
                    <label>
                    First Name
										<input type="text" name="Fname" className="inputfiled" onChange={this.handleChange} />
                    Last Name<br></br>
                    <input type="text" name="Sname" className="inputfiled" onChange={this.handleChange} />
                    <br></br>
                    Email<br></br>
                    <input type="text" name="Uname"  className="inputfiled" onChange={this.handleChange} />
                    Password<br></br>
                    <input type="text" name="Password" className="inputfiled" onChange={this.handleChange} />
                    </label>      
                </form>
						</ModalBody>
						<ModalFooter>
						<button  className="Register" > Register </button>
                <button  className="Cancel" > Cancel </button>
						</ModalFooter>
						</Modal>
					</Container>
        );
    }
}

export default Signup;