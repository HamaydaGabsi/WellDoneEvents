import React from 'react';
import './Navbar.css'
import logo from './logo.png'



const Navbar = ({navigation , activelinks}) =>{
   
    return (
        <nav className='fixed-top bg-dark d-flex'>
            <div className='d-flex w-100 h-100 nav-container'>
                <span className={`nav-title nav-title-${activelinks.home}`} onClick={navigation.navigatetohome} >Acceuil</span>
                <span className={`nav-title nav-title-${activelinks.services}`} onClick={navigation.navigatetoservices} >Services</span>
                    <div className='h-100 image-container'>
                        <img id='logo' className='position-relative' src={logo} alt="logo" />
                    </div>
                <span className={`nav-title nav-title-${activelinks.gallerie}`} onClick={navigation.navigatetogallerie} >Gallerie</span>
                <span className={`nav-title nav-title-${activelinks.contact}`} onClick={navigation.navigatetocontact} >Contact</span>
            </div>
        </nav>
    )
}

export default Navbar;