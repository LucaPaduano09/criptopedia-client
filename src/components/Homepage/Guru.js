import React from "react";
import "../../styles/Guru.css";
import LightSpeed from "react-reveal/LightSpeed";
import Lottie from "react-lottie";
import { Link } from "react-router-dom"
import Animazione from "./ChatbotColourAnimation";

const Guru = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="guru-container">
      <LightSpeed>
        <div className="guru-info-container">
          <h1>Vuoi un cosiglio</h1>
          <h1>Su una specifica crypto?</h1>
          <h1>Chiedi al Guru!</h1>
          <p>
            Il nostro Guru e' sempre pronto ad aiutarti! se vuoi un parere di
            criptopedia su una moneta che intendi comprare, di cui vuoi avere
            maggiori informazioni sul progetto, prospettiva o momento migliore
            per acquistarla, inizia una chat con il nostro Guru.
          </p>
          <Link className="lng"to="chiedi-al-guru" style={{textDecoration:"none"}}>
            <button className="guru-button">Chiedi al Guru</button>
          </Link>
        </div>
      </LightSpeed>
      <LightSpeed>
        <div className="guru-imgBackground">
          <Lottie options={defaultOptions} />
        </div>
      </LightSpeed>
    </div>
  );
};

export default Guru;
