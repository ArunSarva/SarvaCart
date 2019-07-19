import React, { Component } from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import './CSS/items.css'
class ItemContainer extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
					<img className="items" src={require('../Image/mobile2.jpg')} />					
					</Col>
					<Col >
					<img className="items" src={require('../Image/mobile2.jpg')} />

					</Col>
					<Col>
					<img className="items" src={require('../Image/mobile2.jpg')} />					
					 </Col>
					<Col>
					<img className="items" src={require('../Image/mobile2.jpg')} />
					
					 </Col>
					 <Col>
					<img className="items" src={require('../Image/mobile2.jpg')} />
					
					 </Col>
				</Row>
				
			</Container>
			
		);
	}
}

export default ItemContainer;