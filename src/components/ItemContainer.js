import React, { Component } from 'react';
import { Col,Row,Container } from 'react-bootstrap';

class ItemContainer extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>1 </Col>
					<Col >2</Col>
					<Col>3 </Col>
					<Col>4 </Col>
				</Row>
				<Row>
					<Col>1 </Col>
					<Col>2</Col>
					<Col>3 </Col>
					<Col>4 </Col>
				</Row>
			</Container>
			
		);
	}
}

export default ItemContainer;