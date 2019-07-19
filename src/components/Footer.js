import React, { Component } from 'react';
import { Button,Card } from 'react-bootstrap';
import './CSS/Footer.css'
class Footer extends Component {
	render() {
		return (
			<div>
				<Card className="text-center" bg="dark" variant="light">
					<Card.Header>
						<p>
							<b>Sarva Cart</b>
							<br></br>
							Mysore   Mandya   Madur   Kennalu
						</p>						
					</Card.Header>
					<Card.Footer className="text-muted">© 1993-2019, Sarva.com</Card.Footer>
				</Card>
			</div>
		);
	}
}

export default Footer;