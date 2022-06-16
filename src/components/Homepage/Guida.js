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
          <div className="guida-articolo-container">
            <Link to={"/come-iniziare"}>
              Come Iniziare
            </Link>
          </div>
          <div className="guida-articolo-container">
          <Link to={"/token"}>
              Token
            </Link>
          </div>
          <div className="guida-articolo-container">
          <Link to={"/blockchain"}>
              Blockchain
            </Link>
          </div>
          <div className="guida-articolo-container">
          <Link to={"/wallet"}>
              Wallet
            </Link>
          </div>
          <div className="guida-articolo-container">
          <Link to={"/holding-trading"}>
              Holding & Trading
            </Link>
          </div>
          <div className="guida-articolo-container">
          <Link to={"/scegliere-dove-investire"}>
              Scegliere Dove Investire
            </Link>
          </div>
          <div className="guida-articolo-container">
          <Link to={"/take-profit-stop-loss"}>
              Take Profit & Stop Loss
            </Link>
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
