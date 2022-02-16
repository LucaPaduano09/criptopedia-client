import { React, useState, useEffect } from "react";
import "../../styles/SingleCrypto.css"
const SingleCrypto = () => {
  const [crypto, setCrypto] = useState({});
  const stringa = window.location.pathname;
  const id = stringa.replace("/monete/", "");
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        "https://criptopedia.herokuapp.com/monete/" + id,
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
          <table className="single-crypto-table">
            <thead>
              <tr>
                <th>Moneta</th>
                <th>Nome</th>
                <th>Creatore</th>
                <th>Anno</th>
                <th>Massimo</th>
                <th>Minimo</th>
              </tr>
            </thead>
            <tbody className="single-crypto-tbody">
              <tr>
                <td><img src={crypto.moneta_image} alt="moneta_image"className="crypto-table-image"/></td>
                <td className="single-crypto-item">{crypto.nome_moneta}</td>
                <td className="single-crypto-item">{crypto.autore}</td>
                <td className="single-crypto-item">{crypto.anno}</td>
                <td className="single-crypto-item">{crypto.massimo_moneta}€</td>
                <td className="single-crypto-item">{crypto.minimo_moneta}€</td>
              </tr>
            </tbody>
          </table>
      </div>
      <div className="single-crypto-description">
        {crypto.desc_moneta}
      </div>
  </div>
  )
};

export default SingleCrypto;
