import React from "react";
import Message from "../../Messages/Message/Message";
import MessagesContainer from "../../Messages/MessagesContainer/MessagesContainer";
import "./chatBody.css";
export default function ChatBody({ messages }) {
  return (
    <div className="chatBodyWrapper">
      <MessagesContainer>
        {messages.map((element, id) => (
          <Message key={id} message={element} />
        ))}
      </MessagesContainer>
    </div>
  );
}
