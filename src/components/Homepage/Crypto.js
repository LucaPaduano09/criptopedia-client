import React from "react";
import "../../styles/Crypto.css";
import Bounce from "react-reveal";
import Lottie from "react-lottie";
import Animazione from "./crypto.json";
const Crypto = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="crypto-container">
      <Bounce top>
        <div className="crypto-info">
          <h1 className="crypto-titolo">Cryptos of the week</h1>
          <img src="/corona.png" alt="corona" />
          <p>
            Criptopedia pubblichera' ogni settimana una lista di crypto compresa tra i 4 e gli 8 token che reputa interessanti, con previsioni, grafici e statistiche
          </p>
          <button className="esplora-button">Esplora</button>
        </div>
      </Bounce>
      <Bounce right>
        <div className="crypto-imgBackground">
          <Lottie options={defaultOptions} 
          />
        </div>
      </Bounce>
    </div>
  );
};

export default Crypto;
