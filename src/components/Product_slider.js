import React, { Component } from 'react';
import { Carousel,Col,Row,Container } from 'react-bootstrap';
import './CSS/Product_slider.css'

class Product_slider extends Component {
	render() {
		return (
			<div>
					<Carousel className="Slider">
						<Carousel.Item>
						<Container>
							<Row>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/redmi.jpeg')} alt="Card image"  />
								<p>
									<h4>Price:15,000Rs</h4>
									Mobile
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/m2.jpeg')} alt="Card image"  />
								<p>
									<h4>Price:14,000Rs</h4>
									Mobile
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/shoe.jpeg')} alt="Card image"  />
								<p>
									<h4>Price:1,000Rs</h4>
									Shoe
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/watch.jpeg')} alt="Card image"  />
								{/* </div> */}
								<p>
									<h4>Price:1,400Rs</h4>
									Watch
								</p>
								
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
								<img className="Products" src={require('../Image/m3.jpeg')} alt="Card image"  />
								<br></br>
								<p>
									<h4>Price:14,000Rs</h4>
									Mobile
								</p>
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/trimmer.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/pendrive.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/m4.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								
							</Row>
						</Container>
						</Carousel.Item>
						<Carousel.Item>
						<Container>
							<Row>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/mobile_stand.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img className="Products" src={require('../Image/trimmer.jpeg')} alt="Card image"  />
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
								{/* </div> */}
								
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