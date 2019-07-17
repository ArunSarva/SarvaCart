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
								<img  src={require('../Image/redmi.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img  src={require('../Image/redmi.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img  src={require('../Image/redmi.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								<Col className="Products">
								{/* <div > */}
								<img  src={require('../Image/redmi.jpeg')} alt="Card image"  />
								{/* </div> */}
								
								</Col>
								
							</Row>
						</Container>
						{/* <img  src={require('../Image/slide1.jpg')} alt="Card image"  /> */}
						<Carousel.Caption>
								<h3>First slide label</h3>            
						</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
						<img  src={require('../Image/slide2.jpg')} alt="Card image"  />
						<Carousel.Caption>
								<h3>Second slide label</h3>
						</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
						<img  src={require('../Image/slide3.jpg')} alt="Card image"  />

						<Carousel.Caption>
								<h3>Third slide label</h3>
						</Carousel.Caption>
						</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Product_slider;