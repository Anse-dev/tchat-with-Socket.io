import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function MessagesContainer({ children }) {
  return <ScrollToBottom className="messages">{children}</ScrollToBottom>;
}
