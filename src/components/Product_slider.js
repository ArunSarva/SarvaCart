import React, { Component } from 'react';
import { Carousel,Col,Row,Container } from 'react-bootstrap';
import './CSS/Product_slider.css'

class Product_slider extends Component {
	render() {
		return (
			<div>
					<Carousel className="Slider" bg="primary">
						<Carousel.Item>
						<Container>
							<Row>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia1.jpg')} alt="Card image"  />
								<p className="pgh" >
									<h6>Price:15,000Rs</h6>
									Mobile
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/Mobiles/Honor/honor1.jpg')} alt="Card image"  />
								<p className="pgh">
									<h6>Price:14,000Rs</h6>
									Mobile
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/mobile1.jpg')} alt="Card image"  />
								<p className="pgh">
									<h6>Price:1,000Rs</h6>
									Shoe
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/mobile2.jpg')} alt="Card image"  />
								{/* </div> */}
								<p className="pgh">
									<h6>Price:1,400Rs</h6>
									Watch
								</p>
								
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
								</Col>
								
							</Row>
						</Container>
						{/* <img  src={require('../Image/slide1.jpg')} alt="Card image"  /> */}
						</Carousel.Item>
						<Carousel.Item>
						<Container>
							<Row>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia2.jpg')} alt="Card image"  />
								<br></br>
								<p className="pgh">
									<h6>Price:14,000Rs</h6>
									Mobile
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/Mobiles/Honor/honor2.jpg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/mobile4.jpg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
								</Col>
								
							</Row>
						</Container>
						</Carousel.Item>
						<Carousel.Item>
						<Container>
							<Row>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/Mobiles/Nokia/nokia3.jpg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/Mobiles/Honor/honor2.jpg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/m2.jpeg')} alt="Card image"  />
								</Col>
								<Col className="Products">
									<img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
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