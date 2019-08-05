import React, { Component } from 'react';
import { Col, Button,Form } from 'react-bootstrap';
import api from '../Api/Index'
import Navbar1 from './Navbar1';

class Addproduct extends Component {
	constructor(props) {
		super(props)

		this.state = {
            Product_Brand:'',
            Product_Name:'',
            Product_Price:'',
            Product_Discription:'',
            Product_Brand_message:'',
            Product_Name_message:'',
            Product_Price_message:'',
            Product_Discription_message:''
					}
			}
			// state = {
			// 	visible: true,
			// 	modalIsOpen: true
			//   }
			Addproduct = async () => {
			const { Product_Brand,Product_Name,Product_Price,Product_Discription } = this.state
			const payload = { Product_Brand,Product_Name,Product_Price,Product_Discription }
			debugger;
			let a=0;
				if(!this.state.Product_Brand)
					{
						a=1;
						const Product_Brand_message = "Product Brand is empty"
						this.setState({ Product_Brand_message })
					}
				
					if(!this.state.Product_Name)
					{
						a=1;
						const Product_Name_message = "Product Name is empty "
						this.setState({ Product_Name_message })
                    }
                    if(!this.state.Product_Price)
					{
						a=1;
						const Product_Price_message = "Product Price is empty "
						this.setState({ Product_Price_message })
					}if(!this.state.Product_Discription)
					{
						a=1;
						const Product_Discription_message = "Product Discription is empty "
						this.setState({ Product_Discription_message })
					}
					
				
				if(a==0){
					await api.Login(payload).then(res => {
				// window.alert()
				
							this.setState({
                                Product_Brand:'',
                                Product_Name:'',
                                Product_Price:'',
                                Product_Discription:''
				})
				// browserHistory.push("/home");
			})

			// .catch(res =>
			// 	// {browserHistory.push("/");}
			// )

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

    render() {
        return (
            <div>
                <Navbar1/>
                <div className="container">
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="Brand_name">
                        <Form.Label>Product Brand</Form.Label>
                        <Form.Control type="text" value= {Product_Brand} placeholder="Enter Brand name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="Product_name">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" value= {Product_Name} placeholder="Product name" />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Price">
                      <Form.Label>Price</Form.Label>
                      <Form.Control value= {Product_Price} placeholder="Price" />
                    </Form.Group>

                    <Form.Group controlId="Discription">
                      <Form.Label>Discription</Form.Label>
                      <Form.Control value= {Product_Discription} placeholder="Discription" />
                    </Form.Group>
                      <Button variant="primary" onClick={this.AddUser} type="submit">
                      Upload Product
                    </Button>
                  </Form>
                </div>
            </div>
        );
    }
}

export default Addproduct;