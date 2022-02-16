import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import Swing from "react-reveal/Swing";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-imgBackground">
        <img src="/ft-image.jpg"/>
      </div>
      <div className="footer-items">
      <Swing>
        <div className="footer-copy-container">
          <h1>Copyright©</h1>
          <p>Criptopedia e' un marchio registrato</p>
          <p>P.Iva 39274128490510259</p>
          <p>Capitale Sociale: 10000€</p>
        </div>
      </Swing>
      <Swing>
        <div className="footer-contatti-container">
          <h1>Contattaci</h1>
          <a href="mailto:lucapaduano09@outlook.it">lucapaduano09@outlook.it</a>
          <a href="tel:3426137684">+39 3426137684</a>
        </div>
      </Swing>
      <Swing>
        <div className="footer-contatti-container">
          <h1>Lavora con noi</h1>
          <p>
            Hai una buona preparazione sul mondo crypto? inviaci un curriculum
            ed entra a far parte del team
          </p>
          <Link to={"/lavora-con-noi"}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="footer-invia-button">invia la candidatura</button>
            </div>
          </Link>
        </div>
      </Swing>
      </div>
    </div>
  );
};

export default Footer;
