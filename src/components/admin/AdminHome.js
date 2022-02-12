import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/admin/AdminHome.css";

const AdminHome = () => {
  const [cryptos, setCryptos] = useState([{}]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`https://criptopedia.herokuapp.com/monete/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setCryptos(records);
    }

    getProducts();

    return;
  }, [cryptos.length]);

  console.log(cryptos);

  return (
    <div className="admin-home-container">
      <div className="topbar-container">Benvenuto admin</div>
      <div className="cards-container">
        <Link to="/cryptos-add" className="card-link">
          <div className="card">
            <h1>MONETE</h1>
            <h1>{cryptos.length}</h1>
          </div>
        </Link>
        <div className="card">
          <h1>Notizie</h1>
          <h1>0</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
