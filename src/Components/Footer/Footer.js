import WDlogo from "./WDlogo.png";
import facebookIcon from "./facebook.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer bg-dark">
      <div className="FooterLogo">
        <img alt="" src={WDlogo}></img>
      </div>
      <div className="FooterDesc">
        <h2 className="title footer-desc-title ">Well Done events</h2>
        <p className="footer-desc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="DividerContainer">
        <div className="divider"></div>
      </div>
      <div className="FooterMediaLinks">
        <h4 className="title" style={{ fontSize: "28px" }}>
          Nous suivre
        </h4>
        <div className="MediaIcons">
          <a href="https://www.facebook.com/profile.php?id=100087221494948" target='_blank'>
            <img alt=""
              style={{ height: "40px", color: "#6383EA" }}
              src={facebookIcon}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
