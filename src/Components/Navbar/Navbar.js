import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
const Navbar = ({
  navigation,
  // activelinks,
  setNavbarHeight,
  navbarHeight,
  setID,
}) => {
  const [activelink , setactivelink] = useState(sessionStorage.getItem('activelink'))
  const [lieux, setlieux] = useState([]);
  const fetch_lieux = () => {
    fetch("http://localhost:5000/api/lieux/get/all/active")
      .then((response) => response.json())
      .then((data) => setlieux(data.data))
      .catch((err) => console.error(err));
    if(lieux[0])
    setID(lieux[0]._id);
  };
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
      if (prevScrollpos >= currentScrollPos) {
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

  useEffect(() => {
    setNavbarHeight(
      document.getElementById("nav-bottom").getBoundingClientRect().top
    );
  });

  const hideSecondaryNavbar = () => {
    document.getElementById("nav").classList.remove("doubleNav");
    document.getElementById("body").classList.remove("doubleNav-active");
  };
  const [navPage, setNavPage] = useState(1);
  const [activeNavPage, setActiveNavPage] = useState(1);
  const [linksPerPage, setLinksPerPage] = useState(5);
  const rightArrowClick = () => {
    const nav2=document.getElementById('nav2')
    const fullllWidth=nav2.scrollWidth
    const windowWidth=window.innerWidth;
    if(fullllWidth>windowWidth+(navPage-1)*200){
      
      nav2.style.translate='-'+navPage*200+'px 0';
      setNavPage(navPage+1)
    }
  };
  const leftArrowClick = () => {
    const nav2=document.getElementById('nav2')
    if(navPage>1){
      nav2.style.translate='-'+(navPage-2)*200+'px 0';
      setNavPage(navPage-1)
    }
  };
  useEffect(fetch_lieux, []);
  const navbar_elements = 
  [
    'accueil','services','gallerie','contact'
  ]
  
   const setinitialstate = ()=> {
    document.getElementById(sessionStorage.getItem('activelink')).classList.add('actif')

   }
    const linkhandler = (element) => {
      
      navbar_elements.forEach((el) => {
        if(element.id === el) {
          sessionStorage.setItem('activelink',element.id)
          element.classList.add('actif')
      }
        else document.getElementById(el).classList.remove('actif')
      })
    }

    useEffect(setinitialstate,[])
  return (
    <nav
      className="fixed-top bg-dark d-flex"
      id="nav"
      onClick={(e) => {
        const gallerie = document.getElementById("gallerie");
        if (e.target === gallerie) {
          document.getElementById("nav").classList.add("doubleNav");
          document.getElementById("body").classList.add("doubleNav-active");
        }
      }}
    >
      <div className="d-flex w-100  nav-container">
        <div className="nav-row-1">
          <span
            className={`nav-title `}
            onClick={(e) => {
              hideSecondaryNavbar();
              navigation.navigatetohome();
              setactivelink('accueil')
              linkhandler(e.target)
            }}
            id="accueil"
          >
            Accueil
          </span>
          <span
            className={`nav-title`}
            onClick={(e) => {
              hideSecondaryNavbar();
              navigation.navigatetoservices();
              setactivelink('services')
              linkhandler(e.target)
            }}
            id="services"
          >
            Services
          </span>
        </div>
        {/* add bg-dark,image-container and remove h-100  */}
        <div
          className="bg-dark image-container"
          onClick={(e)=>{
            navigation.navigatetohome()
            hideSecondaryNavbar()
            setactivelink('accueil')
            linkhandler()
          }}
        >
          <img
            id="logo"
            className="position-relative nav-row-2"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="nav-row-3">
          <span
            className={`nav-title`}
            onClick={(e) => {
              navigation.navigatetogallerie();
              fetch_lieux();
              setactivelink('gallerie')
              linkhandler(e.target)
            }}
            id="gallerie"
          >
            Gallerie
          </span>
          <span
            className={`nav-title `}
            onClick={(e) => {
              hideSecondaryNavbar();
              navigation.navigatetocontact();
              setactivelink('contact')
              linkhandler(e.target)
            }}
            id="contact"
          >
            Contact
          </span>
        </div>
      </div>
      <div className="secondary-navbar-bg"> 
      <div className="left-arrow arrow" onClick={leftArrowClick}>
            {" "}
            <span>&lt;</span>
          </div>
          <div className="right-arrow arrow" onClick={rightArrowClick}>
          <span>&gt;</span>
          </div>
        <div className="secondary-navbar " id="nav2">
         
          {lieux.map((e, index) => {
            return (
              <div className="secondary-navbar-title-container" >
                <span
                  onClick={(f) => {
                    setID(e._id);
                  }}
                  className={`${e._id} nav-title   secondary-nav-title `}
                >
                  {e.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div id="nav-bottom" style={{ width: "100%" }}></div>
    </nav>
  );
};

export { Navbar };
