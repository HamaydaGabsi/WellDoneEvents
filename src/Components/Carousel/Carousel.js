import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import photo from './DSC_0304.jpg';
import photo1 from './IMG_0006.jpg';
import photo2 from './IMG_0621.jpg';
import './Carousel.css'


const PhotoCarousel = () =>{

    return(
      <div className=" carousel-container">
          <Carousel  fade>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={photo}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={photo1}
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={photo2}
                alt="Third slide"
              />

            </Carousel.Item>
          </Carousel>
      </div>
    );
}

export default PhotoCarousel;