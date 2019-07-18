import React, { Component } from 'react';
import { Button,Card } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<div>
				<Card className="text-center" bg="dark" variant="light">
					<Card.Header>Featured
						<br></br>
						Mysore Mandya Madur 
					</Card.Header>
					<Card.Body>
						<Card.Title>Special title treatment</Card.Title>
						<Card.Text>
							With supporting text below as a natural lead-in to additional content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
					<Card.Footer className="text-muted">© 1996-2019, Sarva.com</Card.Footer>
				</Card>
			</div>
		);
	}
}

export default Footer;