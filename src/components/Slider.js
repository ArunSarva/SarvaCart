import React from 'react';
import { Zoom } from 'react-slideshow-image';
import { Carousel } from 'react-bootstrap';
import './CSS/slider.css'
 
const Slideshow = () => {
    return (
      <Carousel className="Slider">
        <Carousel.Item>
        <img  src={require('../Image/slide1.jpg')} alt="Card image"  />
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
    )
}
export default Slideshow;