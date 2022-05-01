import React, { useState } from "react";

export default function LoginControl() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLogoutClick = (e) => {
    setisLoggedIn(false);
  };
  const handleLoginClick = (e) => {
    setisLoggedIn(true);
  };
  let button;
  if (isLoggedIn) {
    button = <Logout onClick={this.handleLoginClick.bind(this)} />;
  } else {
    button = <Logout onClick={this.handleLoginClick.bind(this)} />;
  }
  return <div>{button}</div>;
}
