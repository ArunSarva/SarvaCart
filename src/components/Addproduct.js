import React, { Component } from 'react';
import { Col, Button,Form } from 'react-bootstrap';

import Navbar1 from './Navbar1';

class Addproduct extends Component {
    render() {
        return (
            <div>
                <Navbar1/>
								<div className="container">
									<Form>
										<Form.Row>
											<Form.Group as={Col} controlId="Brand_name">
												<Form.Label>Product Brand</Form.Label>
												<Form.Control type="text" placeholder="Enter Brand name" />
											</Form.Group>

											<Form.Group as={Col} controlId="Product_name">
												<Form.Label>Product name</Form.Label>
												<Form.Control type="text" placeholder="Product name" />
											</Form.Group>
										</Form.Row>

										<Form.Group controlId="Price">
											<Form.Label>Price</Form.Label>
											<Form.Control placeholder="Price" />
										</Form.Group>

										<Form.Group controlId="Discription">
											<Form.Label>Discription</Form.Label>
											<Form.Control placeholder="Discription" />
										</Form.Group>

										<Form.Row>
											<Form.Group as={Col} controlId="image">
												<Form.Label>uplaod image</Form.Label>
												<Form.Control />
											</Form.Group>
										</Form.Row>
											<Button variant="primary" type="submit">
											Upload Product
										</Button>
									</Form>
								</div>
            </div>
        );
    }
}

export default Addproduct;