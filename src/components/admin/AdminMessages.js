import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/admin/AdminMessages.css";

const AdminMessagePage = (props) => (
  <tr>
    <td>
      <p>{props.messaggio.username}</p>
    </td>
    <td>
      <p>{props.messaggio.email}</p>
    </td>
    <td style={{ width: "600px" }}>
      <p>{props.messaggio.messaggio}</p>
    </td>
    <td>
        <Link to = {`/admin-message/`+ props.messaggio._id}>
            Rispondi
        </Link>
    </td>
  </tr>
);

export default function ProductList() {
  const [messages, setMessages] = useState([]);
  // This method fetches the records from the database.
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`https://criptopedia.herokuapp.com/ask/`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setMessages(records);
    }

    getProducts();
    return;
  }, [messages.length]);

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

    const newRecords = messages.filter((el) => el._id !== id);
    setMessages(newRecords);
  }

  // This method will map out the records on the table
  function MessaggiList() {
    return messages.map((message) => {
      return (
        <AdminMessagePage
          messaggio={message}
          deleteRecord={() => deleteRecord(message._id)}
          key={message._id}
        />
      );
    });
  }
  return (
    <div className="admin-messages-container">
      <table className="message-table">
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>MESSAGGIO</th>
            <th>AZIONI</th>
          </tr>
        </thead>
        <tbody>{MessaggiList()}</tbody>
      </table>
    </div>
  );
}
