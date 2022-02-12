import { React, useState, useEffect } from "react";

const SingleCrypto = () => {
  const [crypto, setCrypto] = useState({});
  const stringa = window.location.pathname;
  const id = stringa.replace("/monete/", "");
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        "http://localhost:5000/monete/" + id,
        {
          method: "GET",
        }
      ).catch((error) => {
        window.alert(error);
        return;
      });
      const moneta = await response.json();
      setCrypto(moneta);
    }
    console.log(crypto)
    getProduct();
  }, []);

  return (
  <div className="single-crypto-container">
      <div className="single-crypto-info">
          <h1>{crypto.nome_moneta}</h1>
          <h2>{crypto.desc_moneta}</h2>
          <img src={crypto.moneta_image} alt={crypto.nome_moneta}/>
      </div>
  </div>
  )
};

export default SingleCrypto;
