import React from 'react';
import './Navbar.css'
import logo from './logo.png'


const Navbar = () =>{

    return (
        <nav className='fixed-top bg-dark d-flex'>
            <div className='d-flex w-100 h-100 nav-container'>
                <a className='nav-title acceuil ' href='#home'>Acceuil</a>
                <a className=' nav-title services ' href='#home'>Services</a>
                <div className='h-100 image-container'>
                    <img id='logo' className='position-relative' src={logo} alt="logo" />
                </div>
                <a className=' nav-title lieux ' href='#home'>Lieux</a>
                <a className='nav-title contact ' href='#home'>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;