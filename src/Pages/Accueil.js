import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PhotoCarousel from '../Components/Carousel/Carousel';
import CardsContainer from '../Components/CardsContainer/CardsContainer';

const Accueil = () => {
    return (
  <>
    <Navbar />
    <PhotoCarousel />
    <CardsContainer />
  </>
  );
}

export default Accueil;