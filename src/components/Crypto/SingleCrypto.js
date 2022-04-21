import { React, useState, useEffect } from "react";
import "../../styles/SingleCrypto.css";

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
    getProduct();
  }, []);

  return (
    <div className="single-crypto-container">
      <div className="single-crypto-info">
      </div>
      <div className="single-crypto-name">
        <h1>{crypto.nome_moneta}</h1>
        <table className="single-crypto-table">
          <tbody className="single-crypto-tbody">
            <tr>
              <td>
                <img
                  src={crypto.moneta_image}
                  alt="moneta_image"
                  className="crypto-table-image"
                />
              </td>
              {/* <td className="single-crypto-item">{crypto.nome_moneta}</td> */}
              <td className="single-crypto-item">{crypto.autore}</td>
              <td className="single-crypto-item">{crypto.anno}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="single-crypto-description" dangerouslySetInnerHTML={{__html: crypto.desc_moneta}}/>
      <div style={{ width: "80vw" }}>
        <button className="single-crypto-link">
          <a target="_blank" href={crypto.link_acquisto}>
            Acquista {crypto.acronimo}
          </a>
        </button>
      </div>
    </div>
  );
};

export default SingleCrypto;
