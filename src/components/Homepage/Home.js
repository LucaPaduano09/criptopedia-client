import React from "react";
import "../../styles/Home.css";
import Bounce from "react-reveal";
import Lottie from "react-lottie";
import Animazione from "./home.json";

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
              Assets , Blockchain , Token , NFT , Smart Contract , sono tutti
              termini che ti suonano nuovi? Non preoccuparti sei nel posto
              giusto! Lo scopo di Criptopedia e' quello di aiutare quante piu'
              persone possibilie ad avvicinarsi al crescente mondo delle crypto.
              Qui troverai tutto cio di cui hai bisogno, sia se sei alle prime
              armi, sia se sei un esperto. Grazie al nostro sistema di guida e
              consulenza sarai seguito passo per passo nella tua avventura. Non
              perderti nessuna notizia, Criptopedia pubblica articoli ogni
              giorno per assicurarsi che i suoi lettori restino sempre ben
              informati.
            </p>
            <button className="home-button-learn">Scopri di piu</button>
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
