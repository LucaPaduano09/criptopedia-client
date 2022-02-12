import React from "react";
import "../../styles/admin/CryptoAdd.css";

const CryptoAdd = () => {
  return (
    <div className="crypto-add-container">
      <h1>Aggiungi una crypto</h1>

      <div className="crypto-add-form">
        <label>Nome crypto</label>
        <input type="text" placeholder="nome" />
        <label>Descrizione</label>
        <input type="text" placeholder="descrizione" />
        <label>Massimo Storico</label>
        <input type="text" placeholder="massimo" />
        <label>Minimo Storico</label>
        <input type="text" placeholder="minimo" />
        <label>Anno</label>
        <input type="text" placeholder="anno" />
        <label>Immagine</label>
        <input type="file" placeholder="immagine" />
        <button>Invia</button>
      </div>
    </div>
  );
};

export default CryptoAdd;
