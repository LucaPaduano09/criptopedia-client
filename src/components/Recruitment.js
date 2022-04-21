import React from "react";
import { useState } from "react";
import "../styles/Recruitment.css";

const Recruitment = () => {
  const [sito1, setSito1] = useState("");
  const [sito2, setSito2] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = async (sito1, nome, cognome, email) => {
    const response = await fetch(
      "https://criptopedia.herokuapp.com/curriculum/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json, text/plain, */*",
        },
        body: JSON.stringify({
          sito1: sito1,
          nome: nome,
          cognome: cognome,
          email: email
        }),
      }
    );
    const result = await response.json();
    if (result.ok) {
      console.log("aggiunto");
    }
  };

  return (
    <div className="recruit-container">
      <div className="recruit-wrapper">
        <h1>Invia La Tua Candidatura</h1>
        <p>
          Criptopedia ha bisogno di alcune informazioni sui tuoi progetti.
          Saremo lieti di prendere in carico la tua candidatura, ti chiediamo
          solo qualche informazione preliminare come un link ad un sito
          personale o non in cui visionare gli NFT.
        </p>
        <div className="recruit-form-container">
          <div>
            <label>Url sito : </label>
            <input
              type={"text"}
              placeholder="example.nft/expamle.com"
              onChange={(e) => 
                setSito1(e.target.value)
              }
            />
          </div>
          <div>
            <label>Url sito 2 : </label>
            <input
              type={"text"}
              placeholder="Opzionale"
              onChange={(e) => 
                setSito2(e.target.value)
              }
            />
          </div>
          <div>
            <label>Nome : </label>
            <input
              type={"text"}
              placeholder="Nome"
              onChange={(e) => 
                setNome(e.target.value)
              }
            />
          </div>
          <div>
            <label>Cognome : </label>
            <input
              type={"text"}
              placeholder="Cognome"
              onChange={(e) => 
                setCognome(e.target.value)
              }
            />
          </div>
          <div>
            <label>Inserisci la email : </label>
            <input
              type={"email"}
              placeholder="Email"
              onChange={(e) => 
                setEmail(e.target.value)
              }
            />
          </div>
          <div>
            <button
              onClick={() => handleClick(sito1, sito2, nome, cognome, email)}
            >
              Invia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
