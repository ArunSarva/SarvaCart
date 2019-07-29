// import React, { Component } from 'react';
// import { Col, Button,Form } from 'react-bootstrap';

// import Navbar1 from './Navbar1';

// class Addproduct extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 				Email: '',
// 				Password: '',
// 				Email_message:"",
// 				Password_message:''
// 					}
// 			}
// 			// state = {
// 			// 	visible: true,
// 			// 	modalIsOpen: true
// 			//   }
// 			AddUser = async () => {
// 					const { Email,Password } = this.state
// 			const payload = { Email,Password}
// 			const Email_pattran=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/;
// 			const reg_pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
// 			debugger;
// 			let a=0;
// 			if(this.state.Email===null||!Email_pattran.test(this.state.Email))
// 				{
// 					if(!this.state.Email)
// 					{
// 						a=1;
// 						const Email_message = "Email is empty"
// 						this.setState({ Email_message })
// 					}
// 					else {
// 						a=1;
// 						const Email_message = "Invalid Email"
// 						this.setState({ Email_message })
// 					}
// 				}
// 				if(this.state.Password===null  )
// 				{
// 					if(!this.state.Password)
// 					{
// 						a=1;
// 						const Password_message = "password is empty "
// 						this.setState({ Password_message })
// 					}
// 					else {
// 						a=1;
// 						const Password_message = "password is weak use spl char with intiger"
// 						this.setState({ Password_message })
// 					}
// 				}
				
// 				if(a==0){
// 					await api.Login(payload).then(res => {
// 				// window.alert()
				
// 							this.setState({
// 									Email: '',
// 									Password: '',
// 				})
// 				browserHistory.push("/home");
// 			})

// 			.catch(res =>
// 				{browserHistory.push("/");}
// 			)

// 			}
// 			}

// 			handleChangeInputPassword = async event => {
// 					const Password =  event.target.value
// 					this.setState({ Password })
// 			}

// 			handleChangeInputEmail = async event => {
// 					const Email = event.target.value
// 					this.setState({ Email })
// 			}

//     render() {
//         return (
//             <div>
//                 <Navbar1/>
//                 <div className="container">
//                   <Form>
//                     <Form.Row>
//                       <Form.Group as={Col} controlId="Brand_name">
//                         <Form.Label>Product Brand</Form.Label>
//                         <Form.Control type="text" value= {Brand} placeholder="Enter Brand name" />
//                       </Form.Group>

//                       <Form.Group as={Col} controlId="Product_name">
//                         <Form.Label>Product name</Form.Label>
//                         <Form.Control type="text" value= {name} placeholder="Product name" />
//                       </Form.Group>
//                     </Form.Row>

//                     <Form.Group controlId="Price">
//                       <Form.Label>Price</Form.Label>
//                       <Form.Control value= {price} placeholder="Price" />
//                     </Form.Group>

//                     <Form.Group controlId="Discription">
//                       <Form.Label>Discription</Form.Label>
//                       <Form.Control value= {discription} placeholder="Discription" />
//                     </Form.Group>
//                       <Button variant="primary" onClick={this.AddUser} type="submit">
//                       Upload Product
//                     </Button>
//                   </Form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Addproduct;