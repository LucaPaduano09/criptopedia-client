import React from "react";
import "../../styles/Home.css";
import Bounce from "react-reveal";
import Lottie from "react-lottie";
import Animazione from "./home1.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="home-container">
      <Bounce left>
        <div className="home-first">
          <div className="home-info">
            <p className="home-title1">Criptopedia</p>
            <p className="home-title">la casa delle criptovalute</p>
            <p className="home-desc">
              Assets, Blockchain, Token, NFT, sono tutti
              termini che ti suonano nuovi? Non preoccuparti sei nel posto
              giusto! Lo scopo di Criptopedia e' quello di aiutare le persone ad avvicinarsi al mondo delle crypto.
              Grazie al nostro sistema di guida e consulenza sarai seguito nella tua avventura e con le notizie 
              non perderai neanche un aggiornamento sulle crypto.
            </p>
          </div>
          <div className="home-button-container"style={{position:"relative",width:"100%", display:"flex", alignItems:"center"}}>
            <button className="home-button-learn">Vai Alle Notizie</button>
          </div>
        </div>
      </Bounce>
      <Bounce right>
        <div className="home-imgBackground">
          <Lottie options={defaultOptions} />
        </div>
      </Bounce>
    </div>
  );
};

export default Home;
