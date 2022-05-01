import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useChat = () => {
  const { userName, room } = useParams();
  const [message, setmessage] = useState("");
  const [messages, setMessages] = useState([]);
  let socket;
  const endPoint = "http://localhost:5000";
  useEffect(() => {
    socket = io(endPoint);
    socket.emit("join", { userName, room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endPoint]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages(...messages, message);
    });
  }, [message]);

  return { room, message, message, socket };
};
