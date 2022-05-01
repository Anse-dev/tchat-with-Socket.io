import { SendOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./ChatInput.css";

export default function ChatInput({ socket, userName }) {
  const [message, setMessage] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", { userName, message }, () => {
        setMessage("");
      });
    }
  };
  return (
    <div className="chatInputWrapper">
      <div className="chatInputContent">
        <form action="/" onSubmit={(e) => sendMessage(e)}>
          <div className="inputField">
            <input
              name="message"
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="enter"
              value={message}
              onKeyPress={(e) => (e.key === "enter" ? sendMessage(e) : null)}
            />
          </div>
          <SendOutlined onClick={(e) => sendMessage(e)} />
        </form>
      </div>
    </div>
  );
}
