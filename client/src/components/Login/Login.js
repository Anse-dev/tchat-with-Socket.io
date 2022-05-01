import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
/* import { unstable_HistoryRouter } from "react-router-dom"; */
import "./login.css";
export default function Login() {
  const [userName, saveName] = useState("");
  const [room, saveRoom] = useState("");
  const [options, setOptions] = useState([
    { value: "Solidy", label: "Solidy" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "vanilla", label: "Vanilla" },
  ]);
  const navigate = useNavigate();
  const submitForm = () => {
    navigate(`/chat/${userName}/${room}`);
  };
  return (
    <div className="loginWrapper">
      <p>Sign in for echange with every subject </p>
      <div className="container-small">
        <div className="loginInner">
          <form action="" method="post" onSubmit={(e) => submitForm()}>
            <input
              type="text"
              name="userName"
              onChange={(e) => saveName(e.target.value)}
              placeholder="Set your name"
            />

            <select
              name="room"
              id="room"
              onChange={(e) => saveRoom(e.target.value)}
            >
              <option value="">--Please choose room--</option>
              {options.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
            <button
              type="submit"
              disabled={userName.length > 0 && room.length > 0 ? 0 : 1}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
