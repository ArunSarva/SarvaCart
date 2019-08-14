import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import './CSS/Footer.css'
class Footer extends Component {
	render() {
		return (
			<div className="Footer" >
				<Card className="text-center" bg="dark" variant="light">
					<Card.Header>
						<p className="p">
							<b>Sarva Cart</b>
							<br></br>
							Mysore   Mandya   Madur   
							<br></br>
							<a href="https://twitter.com/login"> <img className="icon" src={require('../Image/tweet.png')} /></a>
							<a href="https://www.facebook.com/"><img className="icon" src={require('../Image/fb.png')} /></a>
							<a href="https://www.instagram.com/?hl=en"><img className="icon" src={require('../Image/insta.png')} /></a>
							<a href="https://www.whatsapp.com/"><img className="icon" src={require('../Image/whatsapp.png')} /></a>
						</p>
					</Card.Header>
					<Card.Footer className="text-muted">© 1993-2019, Sarva.com</Card.Footer>
				</Card>
			</div>
		);
	}
}

export default Footer;