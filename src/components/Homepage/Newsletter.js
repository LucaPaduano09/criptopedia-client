import {React, useState} from "react";
import "../../styles/Newsletter.css";
import Bounce from "react-reveal";
import Lottie from "react-lottie";
import Animazione from "./newsletter.json";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success,setSuccess] = useState(false);
  const handleSubmit = async (email) => {
    console.log("entro in handlesubmit",email)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: email})
  };
  const response = await fetch('https://criptopedia.herokuapp.com/newsletter/add', requestOptions);
    const data = await response.json();
    console.log(data)
    setSuccess(true);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="newsletter-container">
      <Bounce left>
        <div className="newsletter-info">
          <h1 className="newsletter-title">Iscriviti alla newsletter</h1>
          <p className="newsletter-desc">
            Vuoi sapere in anticipo quando uscira' la guida di Criptopedia, o
            seplicemente vuoi sempre rimanere informato sulle crypto? Iscriviti!
          </p>
          <div className="newsletter-form-container">
            <input type="text" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
            <button className="invia-button" onClick={() => handleSubmit(email)}>invia</button>
          </div>
          {
            success === true && <div className="newsletter-success-banner">Iscrizione effettuata con successo</div> 
          }
        </div>
      </Bounce>
      <Bounce right>
        <div className="newsletter-imgContainer">
          <Lottie options={defaultOptions} />
        </div>
      </Bounce>
    </div>
  );
};

export default Newsletter;
