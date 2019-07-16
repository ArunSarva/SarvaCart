import React from 'react';
import { Zoom } from 'react-slideshow-image';
const images = [
  'Image/slide_3.jpg',
  'Image/slide_4.jpg',
  'Image/slide_5.jpg',
  'Image/slide_6.jpg',
  'Image/slide_7.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}
export default Slideshow;