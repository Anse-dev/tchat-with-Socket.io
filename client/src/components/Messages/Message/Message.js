import { Person } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router";

export default function Message({ message: { user, text } }) {
  const { userName } = useParams();
  let isCurrentUser = userName === user ? true : false;
  return (
    <div className={`message ${isCurrentUser ? "rigth" : "left"}`}>
      <Person />
      <div className="messageContent">
        {isCurrentUser ? null : <span>{user}:</span>}
        {text}
      </div>
    </div>
  );
}
