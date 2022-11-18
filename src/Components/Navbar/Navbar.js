import React from 'react';
import './Navbar.css'
import logo from './logo.png'


const Navbar = () =>{

    return (
        <nav className='fixed-top bg-dark d-flex'>
            <div className='d-flex w-100  nav-container'>
            <div className='nav-row-1'>
                <a className='nav-title acceuil ' href='#home'>Acceuil</a>
                <a className=' nav-title services ' href='#home'>Services</a></div>
                {/* add bg-dark,image-container and remove h-100  */}
                <div className='h-100  '> 
                    <img id='logo' className='position-relative nav-row-2' src={logo} alt="logo" />
                </div>
                <div className='nav-row-3'>
                <a className=' nav-title lieux ' href='#home'>Lieux</a>
                <a className='nav-title contact ' href='#home'>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;