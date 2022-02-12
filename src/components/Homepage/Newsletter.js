import React from "react";
import "../../styles/Newsletter.css";
import Bounce from "react-reveal";
import Lottie from "react-lottie";
import Animazione from "./newsletter.json";
const Newsletter = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="newsletter-container">
      <Bounce left>
        <div className="newsletter-info">
          <h1 className="newsletter-title">Iscriviti alla newsletter</h1>
          <p className="newsletter-desc">
            Vuoi sapere in anticipo quando uscira' la guida di Criptopedia, o
            seplicemente vuoi sempre rimanere informato sulle crypto? Iscriviti!
          </p>
          <div className="newsletter-form-container">
            <input type="text" placeholder="email" />
            <button className="invia-button">invia</button>
          </div>
        </div>
      </Bounce>
      <Bounce right>
        <div className="newsletter-imgContainer">
          <Lottie options={defaultOptions} />
        </div>
      </Bounce>
    </div>
  );
};

export default Newsletter;
