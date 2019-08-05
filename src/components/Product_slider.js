import React, { Component } from 'react';
import { Carousel,Col,Row,Container } from 'react-bootstrap';
import './CSS/Product_slider.css'

class Product_slider extends Component {
	render() {
		return (
			<div>
					<Carousel className="Slider" >
						<Carousel.Item>
						<Container>
							<Row>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh" >									
									<h6>Price:15,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Honor/honor1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:14,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Samsung/Samsung1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:13,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Oppo/Oppo3.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:12,400Rs</h6>
									Mobile
								</p>
								
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image/Mobiles/Oppo/Oppo1.jpg')} alt="Card image"  />
									<br></br>
								<p className="pgh">
									<h6>Price:10,400Rs</h6>
									Mobile
								</p>
								</Col>
								
							</Row>
						</Container>
						</Carousel.Item>
						<Carousel.Item>
						<Container>
						<Row>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh" >									
									<h6>Price:15,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Honor/honor1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:14,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia5.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:13,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Samsung/Samsung2.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:12,400Rs</h6>
									Mobile
								</p>
								
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image//Mobiles/Oppo/Oppo2.jpg')} alt="Card image"  />
									<br></br>
								<p className="pgh">
									<h6>Price:10,400Rs</h6>
									Mobile
								</p>
								</Col>
								
							</Row>
						</Container>
						</Carousel.Item>
						<Carousel.Item>
						<Container>
						<Row>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh" >									
									<h6>Price:15,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Honor/honor1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:14,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Samsung/Samsung1.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:13,000Rs</h6>
									Mobile
								</p>
								</Col>
								<Col className="Products">
								<img className="Products" src={require('../Image/Mobiles/Samsung/Samsung5.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:12,400Rs</h6>
									Mobile
								</p>
								
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image/Mobiles/Oppo/Oppo3.jpg')} alt="Card image"  />
									<br></br>
								<p className="pgh">
									<h6>Price:10,400Rs</h6>
									Mobile
								</p>
								</Col>
								
							</Row>
						</Container>
						</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Product_slider;