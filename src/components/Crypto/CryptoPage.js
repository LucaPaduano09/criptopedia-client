import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/CryptoPage.css";
import Lottie from "react-lottie";
import Animazione from "./loading.json";

const CryptoPage = (props) => (
  <div className="cryptopage-container">
    <Link to={`/monete/` + props.url}>
      <div className="inner-wrapper">
        <div className="cryptopage-description">
          <img src={props.moneta.moneta_image} alt={props.moneta.nome_moneta} />
          <div className="cryptopage-info">
            <h2 className="cryptopage-token-name">
              {props.moneta.nome_moneta}
            </h2>
            <div className="cryptopage-token-categories">
              <p className="cryptopage-token-category">
                {props.moneta.categories[0]}
              </p>
              <p className="cryptopage-token-category">
                {props.moneta.categories[1]}
              </p>
              <p className="cryptopage-token-category">
                {props.moneta.categories[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default function ProductList() {
  const [i, setI] = useState(0);
  const [k, setK] = useState(8);
  const [monete, setMonete] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // This method fetches the records from the database.
  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      const response = await fetch(
        `https://criptopedia.herokuapp.com/monete/`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setMonete(records);
      setIsLoading(false);
    }

    getProducts();
    return;
  }, [monete.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`https://criptopedia.herokuapp.com/${id}`, {
      method: "DELETE",
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newRecords = monete.filter((el) => el._id !== id);
    setMonete(newRecords);
  }

  // This method will map out the records on the table
  function MoneteList() {
    const array = monete.slice(i, k);
    return array.map((moneta) => {
      return (
        <CryptoPage
          moneta={moneta}
          deleteRecord={() => deleteRecord(moneta._id)}
          key={moneta._id}
          url={moneta._id}
        />
      );
    });
  }
  function handleClick() {
    setI(0);
    setK(8);
    console.log("cliccato");
  }
  function handleClick2() {
    setI(8);
    setK(16);
    console.log("cliccato");
  }
  return (
    <div className="monete-container">
      <h2 className="monete-titolo">
        In questa sezione troverai tutte le crypto listate da Criptopedia
      </h2>
      <div>
        
      </div>
      {isLoading ? (
        <div>
          <p style={{ color: "white" }}>Stiamo caricando i dati</p>
          <div>
            <Lottie
              style={{ height: "200px", width: "200px" }}
              options={defaultOptions}
            />
          </div>
        </div>
      ) : (
        MoneteList()
      )}

      <div className="filter-container">
        <button onClick={handleClick} style={{ marginLeft: "10px" }}>
          1
        </button>
        <button onClick={handleClick2}>2</button>
      </div>
    </div>
  );
}
