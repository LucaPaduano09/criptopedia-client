import { React, useState, useEffect } from "react";
import "../../styles/admin/AdminSingleMessage.css";

const AdminSingleMessage = () => {
  const [messaggio, setMessaggio] = useState({});
  const [risposta, setRisposta] = useState("");
  const stringa = window.location.pathname;
  const id = stringa.replace("/admin-message/", "");

  useEffect(() => {
    async function getMessage() {
      const response = await fetch(
        "https://criptopedia.herokuapp.com/ask/" + id,
        {
          method: "GET",
        }
      ).catch((error) => {
        window.alert(error);
        return;
      });
      const mex = await response.json();
      setMessaggio(mex);
    }
    getMessage();
  }, []);
  console.log(messaggio.username);
  return (
    <div className="response-container">
      <table className="single-message-container">
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>MESSAGGIO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{messaggio.username}</td>
            <td>{messaggio.email}</td>
            <td>{messaggio.messaggio}</td>
          </tr>
        </tbody>
      </table>
      <div className="response-form-container">
        <input
          type={"text"}
          placeholder="inserisci la risposta"
          onChange={(e) => setRisposta(e.target.value)}
        />
        <button onClick={() => update(messaggio._id, risposta)}>
          Rispondi
        </button>
      </div>
    </div>
  );
};

async function update(id, risposta) {
  console.log(id, risposta);
  const response = await fetch(
    "https://criptopedia.herokuapp.com/update/" + id,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({risposta:risposta}),
    }
  );
  if (!response.ok) {
    const message = `An error occured: ${response.statusText}`;
    window.alert(message);
  }
  const records = await response.json();
  if (records) {
    window.alert("risposta aggiunta");
  }
}
export default AdminSingleMessage;
