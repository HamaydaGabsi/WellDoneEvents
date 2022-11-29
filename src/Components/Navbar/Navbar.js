import React, { useEffect , useState ,componentDidUpdate} from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = ({navigation, activelinks, setNavbarHeight, navbarHeight , setId_lieux , fetch_gallerie }) => {

  const [lieux , setlieux] = useState([])
  const fetch_lieux = () =>{
    fetch('http://localhost:5000/api/lieux/get/all/active')
    .then(response => response.json())
    .then(data => setlieux(data.data) )
    .catch(err => console.error(err))
  }
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

  useEffect(() => {
    setNavbarHeight(
      document.getElementById("nav-bottom").getBoundingClientRect().top
    );
  });
  useEffect(fetch_lieux , [])
  return (
    <nav
      className="fixed-top bg-dark d-flex"
      id="nav"
      onClick={(e) => {
        const gallerie = document.getElementById("gallerie");
        if (e.target == gallerie) {
          document.getElementById("nav").classList.add("doubleNav");
          document.getElementById("body").classList.add("doubleNav-active");
        } else {
          document.getElementById("nav").classList.remove("doubleNav");
          document.getElementById("body").classList.remove("doubleNav-active");
        }
      }}
    >
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
            onClick={(e) => {
              navigation.navigatetogallerie()
              fetch_lieux()
            }}
            id="gallerie"
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

      <div className="secondary-navbar ">
        {lieux.map((e, index) => {
          return <span onClick={()=>{setId_lieux(e._id)}}  className={`${e._id} nav-title   secondary-nav-title `}>{e.title}</span>;
        })}
      </div>
      <div id="nav-bottom" style={{width: '100%'}}></div>
    </nav>
  );
};

export default Navbar;
