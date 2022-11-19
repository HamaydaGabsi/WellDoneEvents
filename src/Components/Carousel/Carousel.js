import React, { useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'




const PhotoCarousel = () =>{

  const [carousels , setcarousels] = useState([])
  const fetch_carousel = () =>{
    let tab =[];
    fetch('http://localhost:5000/api/carousel/active/carousels')
    .then(response => response.json())
    .then((data) =>{ 
      data.data.forEach((carousel) =>{
          const activecarousel = {
            id : carousel._id,
            image : carousel.image
          }
          tab.push(activecarousel);
          }
        )
        setcarousels(tab)
        console.log(carousels)
      }
    )
    .catch(err => console.log(err));
  }


  const add_carousel_item = () =>{
    const carousel = document.querySelector('.carousel-container')
    for(let i = 0; i <carousels.length; i++) {
      const carousel_item = 
       <Carousel.Item  className={`carousel-item${i}`}>
      <img
        className="d-block w-100 h-100"
        src={carousels[i].image}
        alt="First slide"
      />
    </Carousel.Item> 
      carousel.children[i].appendChild(carousel_item)
    }
  }
  
  useEffect(()=>{
    fetch_carousel()
    // add_carousel_item()
  } , [carousels.length])

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