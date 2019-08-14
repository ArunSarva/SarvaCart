import React from 'react';
// import { Zoom } from 'react-slideshow-image';
import { Carousel } from 'react-bootstrap';
import './CSS/slider.css'

const Slideshow = () => {
  return (
    <Carousel className="Slider">
      <Carousel.Item>
        <img src={require('../Image/slide1.jpg')} alt="Card image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('../Image/slide5.jpg')} alt="Card image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('../Image/slide6.jpg')} alt="Card image" />
      </Carousel.Item>
    </Carousel>
  )
}
export default Slideshow;