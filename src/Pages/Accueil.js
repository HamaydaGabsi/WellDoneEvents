import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PhotoCarousel from '../Components/Carousel/Carousel';
import CardsContainer from '../Components/CardsContainer/CardsContainer';
import Footer from '../Components/Footer/Footer';

const Accueil = () => {
    return (
  <>
    <Navbar />
    <PhotoCarousel />
    <CardsContainer />
    <Footer/>
  </>
  );
}

export default Accueil;