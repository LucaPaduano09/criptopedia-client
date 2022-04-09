import React from "react";
import "../../styles/Guida.css";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

const Guida = (props) => {
  const capitoli = props.capitoli;
  const prova = props.prova;
  return (
    <div className="guida-container">
      <div className="guida-wrapper">
        <Bounce>
          <div className="guida-articolo-container"style={{backgroundImage:`url("../../public/capitolo1.jpg")`}}>
            <Link to={"/come-iniziare"}>
              Come Iniziare
            </Link>
          </div>
        </Bounce>
          <div className="guida-articolo-container">
            <a href="">Token</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Blockchain</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Wallet</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Holding & Trading</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Scegliere dove investire</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Take Profit Stop Loss</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Supporti e resitenze</a>
          </div>
          <div className="guida-articolo-container">
            <a href="">Trend</a>
          </div>
      </div>
    </div>
  );
};

export default Guida;
