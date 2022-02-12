import React from "react";
import "../styles/Recruitment.css";
const Recruitment = () => {
  return (
    <div className="recruit-container">
      <div className="recruit-wrapper">
        <h1>Inviaci il tuo curriculum</h1>
        <p>
          Criptopedia e' alla ricerca di personale . Saremo lieti di prendere in
          carico la tua candidatura, riceverai una mail di conferma una volta
          compilato il form
        </p>
      <div className="recruit-form-container">
        <div>
          <label>Inserisci il tuo nome : </label>
          <input type={"text"} placeholder="nome" />
        </div>
        <div>
          <label>Inserisci il tuo cognome : </label>
          <input type={"text"} placeholder="cognome" />
        </div>
        <div>
          <label>Anno di nascita : </label>
          <input type={"date"} placeholder="cognome" />
        </div>
        <div>
          <label>Inserisci la email : </label>
          <input type={"email"} placeholder="email" />
        </div>
        <div>
          <label>curriculum : </label>
          <input type={"file"} placeholder="cognome" />
        </div>
        <div>
            <button>Invia</button>
        </div>
      </div>
      </div>
      <div className="recruit-imgBackground"></div>
    </div>
  );
};

export default Recruitment;
