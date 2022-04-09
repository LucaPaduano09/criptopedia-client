import { React, useState, useEffect } from "react";
import "../../styles/GuruChat.css";

const GuruChat = () => {
  const [chat, setChat] = useState([]);
  const stringa = window.location.pathname;
  const id = stringa.replace("/guru-chat/", "");
  useEffect(() => {
    async function getChat() {
      const response = await fetch(
        `https://criptopedia.herokuapp.com/chat/` + id,
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
        window.alert("error has occured" + response.statusText);
      }
      const result = await response.json();
      setChat(result);
      console.log(chat.chat[0].messaggio)
    }
    getChat();
    return;
  },[chat.length]);
  
  return (
    <div className="guru-chat-container">
      <div className="guru-chat-wrapper">
        <div className="guru-chat-inner-contaner">
          
            {chat.chat[0].messaggio}
        </div>
      </div>
      <div className="guru-chat-input">
        <input type={"text"} placeholder="inserisci il tuo messaggio..." />
        <button>Invia</button>
      </div>
    </div>
  );
};

export default GuruChat;

