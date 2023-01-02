import React from 'react';
import facebookIcon from "./Footer/facebook.svg";
function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      color: '#333',
      fontSize: '30px',
      textAlign: 'center',
    }}>
      <h1>Ce contenu va être bienôt disponible</h1>
      <p>Merci pour votre interêt! Notre site web est en cours de construction.</p> <br />
      
      <p><b>Suivez-nous sur Facebook : </b></p>
      <div className="MediaIcons">
          <a href="https://www.facebook.com/profile.php?id=100087221494948" target='_blank'>
            <img alt=""
              style={{ height: "60px"}}
              src={facebookIcon}
            ></img>
          </a>
        </div>
    </div>
  );
}

export default ComingSoon;
