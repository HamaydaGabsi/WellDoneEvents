import Accueil from './Pages/Accueil';
import Services from './Pages/Services/Services';
import {Gallerie} from './Pages/Gallerie';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import {Navbar }from './Components/Navbar/Navbar';
import { useState , useEffect } from 'react';
import { Helmet } from 'react-helmet-async';




function App() {
  const [Id_lieu , setId_lieu] = useState()
  const navigate = useNavigate();


  const navigatetohome = () =>{
    navigate('/');
  }
  const navigatetoservices =() =>{
    navigate('/services')
  }
  const navigatetogallerie =() =>{
    navigate('/gallerie')
  }
  const navigatetocontact =() =>{
    navigate('/contact')
  }
  const navigation = {
  navigatetohome , navigatetocontact , navigatetogallerie , navigatetoservices
  }

  const [navbarHeight, setNavbarHeight] = useState('0');
  useEffect(() => {
    setNavbarHeight(
      document.getElementById("nav-bottom").getBoundingClientRect().top
    );
    console.log()
  });
  window.onresize = function () {
    setNavbarHeight(
      document.getElementById("nav-bottom").getBoundingClientRect().top
    );
  };

  
  return (
    <>
      <Helmet>
        <title>Well Done Events</title>
        <meta name='description' content='Well Done Events' />
      </Helmet>
      <Navbar
        navigation={navigation}
        navbarHeight={navbarHeight}
        setNavbarHeight={setNavbarHeight}
        setID = {setId_lieu}
      />
      <div
        className="body"
        id="body"
        style={{ marginTop: navbarHeight.toString()+'px' }}
      >
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallerie" element={
          <Gallerie id={Id_lieu}  />
          } />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
