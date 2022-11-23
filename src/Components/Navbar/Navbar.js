import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = ({ navigation, activelinks }) => {
  //navbar animation
  var prevScrollpos = window.pageYOffset;
  window.onresize = function () {
    if (window.innerWidth <= 768) {
      document.getElementById("nav").classList.add("phone-navbar");
    } else {
      document.getElementById("nav").classList.remove("phone-navbar");
    }
  };
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navElement = document.querySelector(".phone-navbar");
    if (navElement) {
      if (prevScrollpos > currentScrollPos) {
        document
          .querySelector(".phone-navbar")
          .classList.remove("phone-navbar-min");
      } else {
        document
          .querySelector(".phone-navbar")
          .classList.add("phone-navbar-min");
      }
    }

    prevScrollpos = currentScrollPos;
  };
//   useEffect(()=>{
    
//     if(activelinks.gallerie){
//         console.log(activelinks.gallerie)
//         document.getElementById('nav').classList.add('doubleNav');
//         }
//     }
//   ,[]);
 
  return (
    <nav className="fixed-top bg-dark d-flex" id="nav">
      <div className="d-flex w-100  nav-container">
        <div className="nav-row-1">
          <span
            className={`nav-title nav-title-${activelinks.home}`}
            onClick={navigation.navigatetohome}
          >
            Acceuil
          </span>
          <span
            className={`nav-title nav-title-${activelinks.services}`}
            onClick={navigation.navigatetoservices}
          >
            Services
          </span>
        </div>
        {/* add bg-dark,image-container and remove h-100  */}
        <div className="bg-dark image-container  ">
          <img
            id="logo"
            className="position-relative nav-row-2"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="nav-row-3">
          <span
            className={`nav-title nav-title-${activelinks.gallerie}`}
            onClick={navigation.navigatetogallerie}
          >
            Gallerie
          </span>
          <span
            className={`nav-title nav-title-${activelinks.contact}`}
            onClick={navigation.navigatetocontact}
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
