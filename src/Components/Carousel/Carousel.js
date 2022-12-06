import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'


const create_carousel_item = (carousel) =>{
  return(
    <Carousel.Item  >
        <img
         className="d-block w-100 h-100 carousel-img"
          src={carousel.image}
          alt="First slide"
              />
    </Carousel.Item>
  )
}
const generate_carousel = (carousels) => {
  return carousels.map(create_carousel_item)
}



const PhotoCarousel = ({carousels}) =>{

    return(
      <div className=" carousel-container">
          <Carousel  fade>
            {generate_carousel(carousels)}
          </Carousel>
      </div>
    );
}

export default PhotoCarousel;