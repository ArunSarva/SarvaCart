import React, { Component } from 'react';
import { Col, Button,Form } from 'react-bootstrap';
import api from '../../Api/Index'
import Navbar1 from '../Navbar1';
import Footer from '../Footer';
import Admin_navBar from './Admin_navBar';
import './CSS/Admin_home.css'

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
				debugger
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
                    if(this.state.Product_Price==="")
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
					 api.Addproduct(payload).then(res => {
						window.confirm(
							`Do you want to remove this product "${this.state.Product_Name}" permanently?`,
						)
						window.location.reload()
				
							this.setState({
                                Product_Brand:'',
                                Product_Name:'',
                                Product_Price:'',
                                Product_Discription:''
				})
				
			})

			}
			}

			handleChangeInputBrand = async event => {
					const Product_Brand =  event.target.value
					this.setState({ Product_Brand })
			}

			handleChangeInputName = async event => {
					const Product_Name = event.target.value
					this.setState({ Product_Name })
			}
			handleChangeInputPrice = async event => {
				const Product_Price =  event.target.value
				this.setState({ Product_Price})
		}

		handleChangeInputDiscription = async event => {
				const Product_Discription = event.target.value
				this.setState({ Product_Discription })
		}

    render() {
		const { Product_Brand,Product_Name,Product_Price,Product_Discription } = this.state
        return (
            <div>
                <Admin_navBar/>
				<div className="admin_home">
                <div className="container bg">
                  <Form className="bg">
                    <Form.Row>
                      <Form.Group as={Col} >
                        <Form.Label>Product Brand</Form.Label>
                        <Form.Control type="text" onChange={this.handleChangeInputBrand} value= {Product_Brand} placeholder="Enter Brand name" />
						<span>{this.state.Product_Brand_message}</span>
					  </Form.Group>

                      <Form.Group as={Col} >
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" onChange={this.handleChangeInputName} value= {Product_Name} placeholder="Product name" />
						<span>{this.state.Product_Name_message}</span>
					  </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Price">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="number" value= {Product_Price} onChange={this.handleChangeInputPrice} placeholder="Price" />
					  <span>{this.state.Product_Price_message}</span>
					</Form.Group>

                    <Form.Group controlId="Discription">
                      <Form.Label>Discription</Form.Label>
                      <Form.Control type="text" value= {Product_Discription} onChange={this.handleChangeInputDiscription} placeholder="Discription" />
					  <span>{this.state.Product_Discription_message}</span>
					</Form.Group>
                  </Form>
				  <Button variant="primary" onClick={this.Addproduct} type="submit">Upload Product</Button>

                </div>
				</div>
				<Footer/>
            </div>
        );
    }
}

export default Addproduct;