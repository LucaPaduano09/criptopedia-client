import { React, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
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
        <Link to={"/login"}>
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
        <div className="mobile-menu-wrapper">
          <button className="mobile-close"onClick={() => setShow(false)}>
            X
          </button>
          <h1>Home</h1>
          <h1>Notizie</h1>
          <h1>Guida</h1>
          <h1>Cryptos</h1>
          <h1>NFT</h1>
        </div>
      ) : (
        console.log("vuoto")
      )
}
    </div>
  );
};

export default Header;
