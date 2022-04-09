import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import Lottie from "react-lottie";
import Animazione from "./login1.json";
import Animazione2 from "./login2.json";
import "../../styles/GuruLogin.css";

const GuruHome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Animazione2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    async function getUsers(){
      const response = await fetch(`https://criptopedia.herokuapp.com/user/`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const error = response.statusText;
        window.alert(error);
        return;
      }
      const records = await response.json();
      setUsers(records);
    }
    getUsers()
  },[users.length])

  async function checkLogin(email, password) {
    users.forEach((user) => {
      if(email === "" || password === ""){
        setError(true);
        setErrorMessage("inserire sia email che password")
      }else {
        if (user.email === email && user.password === password) {
          console.log("utente trovato");
          setError(false)
          history.push("guru-chat/" + user._id)
        }else{

          console.log("dati errati");
          setError(true);
          setErrorMessage("account non trovato");
        }
      }
    });
  }

  return (
    <div className="guru-home-container">
      <h1>Benvenuto nella chat con il guru</h1>
      {/* <p>prima di iniziare effettua l'accesso</p> */}
      <div className="guru-form-container">
        <label>Inserisci le tue credenziali</label>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="guru-form-button"
          onClick={() => checkLogin(email, password)}
        >
          Login
        </button>
        <Link to="/">
          <p>Non hai un account? Registrati!</p>
        </Link>
        <Link to="/">
          <p>Password dimenticata? Resettala</p>
        </Link>
        {error ? (
          <div className="guru-login-error-container">{errorMessage}</div>
        ) : (
          console.log("error settato su false")
        )}
      </div>
      <div className="guru-animation-container">
          <div className="first-animation">
          <Lottie options={defaultOptions} />
          </div>
          <div className="second-animation">
          <Lottie options={defaultOptions2} />
          </div>
      </div>
    </div>
  );
};

export default GuruHome;
