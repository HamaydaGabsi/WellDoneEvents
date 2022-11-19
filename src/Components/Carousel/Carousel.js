import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'




const PhotoCarousel = ({carousels}) =>{


    return(
      <div className=" carousel-container">
          <Carousel  fade>
            <Carousel.Item  className="carousel-item-1">
              <img
                className="d-block w-100 h-100"
                src={carousels[0].image}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
      </div>
    );
}

export default PhotoCarousel;