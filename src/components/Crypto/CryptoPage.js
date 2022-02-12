import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/CryptoPage.css";

const CryptoPage = (props) => (
  <Link to={`/monete/` + props.url}>
    <div className="cryptopage-container">
      <div className="inner-wrapper">
         <div className="cryptopage-description">
          <img
            src={props.moneta.moneta_image}
            alt={props.moneta.nome_moneta}
            style={{ position: "relative", height: "100px", width: "100px" }}
          />
          <h2>{props.moneta.nome_moneta}</h2>
        </div> 
      </div>
    </div>
  </Link>
);

export default function ProductList() {
  const [monete, setMonete] = useState([]);
  // This method fetches the records from the database.
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`https://criptopedia.herokuapp.com/monete/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setMonete(records);
    }

    getProducts();

    return;
  }, [monete.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`https://criptopedia.herokuapp.com/${id}`, {
      method: "DELETE",
    });

    const newRecords = monete.filter((el) => el._id !== id);
    setMonete(newRecords);
  }

  // This method will map out the records on the table
  function MoneteList() {
    return monete.map((moneta) => {
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
  return <div className="monete-container">{MoneteList()}</div>;
}
