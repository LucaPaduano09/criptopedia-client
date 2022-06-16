import { React, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="/logoB-piccolo.png" alt="logo" />
      </div>
      <div className="header-menu">
        <Link to="/">
          <li className="header-menu-option">Home</li>
        </Link>
        <Link to="/news">
          <li className="header-menu-option">Notizie</li>
        </Link>
        <Link to="/cryptos">
          <li className="header-menu-option">Cryptos</li>
        </Link>
        <Link to="/guida">
          <li className="header-menu-option">Guida</li>
        </Link>
        <Link to="/">
          <li className="header-menu-option">Corso</li>
        </Link>
        {/* <Link to={"/"}>
          <li className="header-menu-option">NFT</li>
        </Link> */}
      </div>
      <div className="header-social">
        <a
          href="https://www.facebook.com/profile.php?id=100079900074435"
          target={"_blank"}
        >
          <img src="/facebook.png" alt="social-icon" />
        </a>
        <a
          href="https://instagram.com/criptopedia._?r=nametag"
          target={"_blank"}
        >
          <img src="/instagram.png" alt="social-icon" />
        </a>
        <a href="https://mobile.twitter.com/PediaCripto" target={"_blank"}>
          <img src="/twitter.png" alt="social-icon" />
        </a>
        <Link to={"/admin"}>
          <img
            className="user-social"
            src="/grandfather.png"
            alt="social-icon"
          />
        </Link>
      </div>
      <div className="mobile-menu-container">
        <button onClick={() => setShow(true)}>
          <img src="/menu.png" />
        </button>
      </div>
      {show ? (
        <Slide right>
          <div id="hamb-menu" className="mobile-menu-wrapper">
            <button className="mobile-close" onClick={() => setShow(false)}>
              <img src="/close.png" alt="close-button" />
            </button>
            <Link to="/" onClick={() => setShow(false)}>
              <h1 id="hamb-menu-link" data-text="&nbsp;Home&nbsp;">
                &nbsp;Home&nbsp;
              </h1>
            </Link>
            <Link to="/news" onClick={() => setShow(false)}>
              <h1 id="hamb-menu-link" data-text="&nbsp;Notizie&nbsp;">
                &nbsp;Notizie&nbsp;
              </h1>
            </Link>
            <Link to="/guida" onClick={() => setShow(false)}>
              <h1 id="hamb-menu-link" data-text="&nbsp;Guida&nbsp;">
                &nbsp;Guida&nbsp;
              </h1>
            </Link>
            <Link to="/cryptos" onClick={() => setShow(false)}>
              <h1 id="hamb-menu-link" data-text="&nbsp;Cryptos&nbsp;">
                &nbsp;Cryptos&nbsp;
              </h1>
            </Link>
            <h1 id="hamb-menu-link" data-text="&nbsp;Corso&nbsp;">
              &nbsp;Corso&nbsp;
            </h1>
            <div className="hamb-menu-social">
              <a
                target={"_blank"}
                href="https://mobile.twitter.com/PediaCripto"
              >
                <img src="/twitter.png" />
              </a>
              <a
                target={"_blank"}
                href="https://instagram.com/criptopedia._?r=nametag"
              >
                <img src="/instagram.png" />
              </a>
              <a
                target={"_blank"}
                href="https://www.facebook.com/profile.php?id=100079900074435"
              >
                <img src="/facebook.png" />
              </a>
            </div>
            {console.log("aperto")}
          </div>
        </Slide>
      ) : (
        console.log("vuoto")
      )}
    </div>
  );
};

export default Header;
