import Accueil from './Pages/Accueil';
import Services from './Pages/Services/Services';
import Gallerie from './Pages/Gallerie';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NavPlaceholder from './Components/NavPlaceholder/NavPlaceholder.js';
import { useState } from 'react';




function App() {

  const navigate = useNavigate();
  const Hometrue = {
    home:true,
    contact:false,
    gallerie:false,
    services:false,
  }
  const Servicetrue = {
    services:true,
    home:false,
    contact:false,
    gallerie:false,
  }
  const Gallerietrue = {
    gallerie:true,
    contact:false,
    services:false,
    home:false,
  }
  const Contacttrue = {
    contact:true,
    services:false,
    gallerie:false,
    home:false
  }

  const [activelinks , setactivelinks] = useState(Hometrue) 

  const setlinks=(link) =>{
    if(link === 'home')
    {
    setactivelinks(Hometrue)
    }
    else if(link === 'services')
    {
      setactivelinks(Servicetrue)
    }
    else if(link === 'gallerie')
    {
      setactivelinks(Gallerietrue)
    }
    else if(link === 'contact')
    {
      setactivelinks(Contacttrue)
    }
  }

  

  const navigatetohome = () =>{
  navigate('/');
  setlinks('home')
  }
  const navigatetoservices =() =>{
  navigate('/services')
  setlinks('services')
  }
  const navigatetogallerie =() =>{
  navigate('/gallerie')
  setlinks('gallerie')
  }
  const navigatetocontact =() =>{
  navigate('/contact')
  setlinks('contact')
  }
  const navigation = {
  navigatetohome , navigatetocontact , navigatetogallerie , navigatetoservices
  }

  
  
  return (
    <>
    <Navbar
     navigation = {navigation}
     activelinks = {activelinks}
      />
    <NavPlaceholder />
    <Routes>
      <Route path='/'         element={<Accueil  />} />
      <Route path='/contact'  element={<Contact />} />
      <Route path='/gallerie' element={<Gallerie />} />
      <Route path='/services' element={<Services />} />
    </Routes >
    <Footer />
    </>
  );
}

export default App;