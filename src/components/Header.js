import { React, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

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
        <Link to="/">
          <li className="header-menu-option">Notizie</li>
        </Link>
        <Link to="/cryptos">
          <li className="header-menu-option">Cryptos</li>
        </Link>
        <Link to="/guida">
          <li className="header-menu-option">Guida</li>
        </Link>
        <Link to={"/"}>
          <li className="header-menu-option">NFT</li>
        </Link>
      </div>
      <div className="header-social">
        <img src="/facebook.png" alt="social-icon" />
        <img src="/instagram.png" alt="social-icon" />
        <img src="/twitter.png" alt="social-icon" />
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
        <div id="hamb-menu"className="mobile-menu-wrapper">
          <button className="mobile-close"onClick={() => setShow(false)}>
            <img src="/close.png" alt="close-button"/>
          </button>
          <Link to="/" onClick={() => setShow(false)}>
          <h1>Home</h1>
          </Link>
          <h1>Notizie</h1>
          <h1>Guida</h1>
          <Link to="/cryptos" onClick={() => setShow(false)}>
            <h1>Cryptos</h1>
          </Link>
          <h1>NFT</h1>
          {console.log("aperto")}
        </div>
        </Slide>
      ) : (
        console.log("vuoto")
      )
}
    </div>
  );
};

export default Header;
