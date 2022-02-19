import { React, useState} from "react";
import "../../styles/GuruHome.css";

const GuruHome = () => {
    return(
        <div className="guru-home-container">
            <h1>Benvenuto nella chat con il guru</h1>
            <p>prima di iniziare effettua l'accesso</p>
            <div className="guru-form-container">
                <label>Inserisci la tua mail ed username</label>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button className="guru-form-button">Chatta</button>
            </div>
        </div>
    )

}

export default GuruHome;