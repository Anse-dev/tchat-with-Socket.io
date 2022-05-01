import React, { useEffect, useState } from "react";
import ChatBody from "../ChatBody/ChatBody";
import ChatHeader from "../ChatHeader/CHatHeader";
import ChatInput from "../ChatInput/ChatInput";
import { io } from "socket.io-client";
import "./chatContainer.css";
import { useParams } from "react-router";
let socket;
export default function ChatContainer() {
  const { userName, room } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endPoint = "http://localhost:5000";

  useEffect(() => {
    socket = io(endPoint);
    socket.emit("join", { userName, room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endPoint]);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", { userName, message }, () => {
        setMessage("");
      });
    }
  };
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  console.log(messages);
  return (
    <div className="chatWrapper">
      <div className="chatRow">
        <ChatHeader roomName={room} />
        {messages.length > 0 ? <ChatBody messages={messages} /> : null}
        <ChatInput userName={userName} socket={socket} />
      </div>
    </div>
  );
}
