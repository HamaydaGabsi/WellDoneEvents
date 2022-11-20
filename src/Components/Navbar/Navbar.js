import React from 'react';
import './Navbar.css'
import logo from './logo.png'


const Navbar = ({navigation , activelinks}) =>{

   
    return (
        <nav className='fixed-top bg-dark d-flex'>
            <div className='d-flex w-100  nav-container'>
            <div className='nav-row-1'>
                <span className={`nav-title nav-title-${activelinks.home}`} onClick={navigation.navigatetohome} >Acceuil</span>
                <span className={`nav-title nav-title-${activelinks.services}`} onClick={navigation.navigatetoservices} >Services</span></div>
                {/* add bg-dark,image-container and remove h-100  */}
                    <div className='bg-dark image-container   '> 
                        <img id='logo' className='position-relative nav-row-2' src={logo} alt="logo" />
                    </div>
                <div className='nav-row-3'>
                <span className={`nav-title nav-title-${activelinks.gallerie}`} onClick={navigation.navigatetogallerie} >Gallerie</span>
                <span className={`nav-title nav-title-${activelinks.contact}`} onClick={navigation.navigatetocontact} >Contact</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;