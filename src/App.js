import Accueil from './Pages/Accueil';
import Services from './Pages/Services/Services';
import Gallerie from './Pages/Gallerie';
import Contact from './Pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NavPlaceholder from './Components/NavPlaceholder/NavPlaceholder.js';
import { useState } from 'react';



function App() {

  const navigate = useNavigate();
  const [activelinks , setactivelinks] = useState({
    home : true ,
    services : false ,
    gallerie : false ,
    contact : false
  }) 
  const setlinks=(link) =>{
    
    if(link === 'home')
    setactivelinks(
    {
      home:true,
      contact:false,
      gallerie:false,
      services:false,
    })
    else if(link === 'services')
    setactivelinks(
    {
      services:true,
      home:false,
      contact:false,
      gallerie:false,
    })
    else if(link === 'gallerie')
    setactivelinks(
    {
      gallerie:true,
      contact:false,
      services:false,
      home:false,
    })
    else if(link === 'contact')
    setactivelinks(
    {
      contact:true,
      services:false,
      gallerie:false,
      home:false
    })
    console.log(activelinks)
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
  navigatetohome , navigatetocontact , navigatetogallerie , navigatetoservices}

  return (
    <>
    <Navbar
     navigation = {navigation}
     activelinks = {activelinks}
      />
    <NavPlaceholder />
    <Routes>
      <Route path='/' element={<Accueil  />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/gallerie' element={<Gallerie />} />
      <Route path='/services' element={<Services />} />
    </Routes >
    </>
  );
}

export default App;