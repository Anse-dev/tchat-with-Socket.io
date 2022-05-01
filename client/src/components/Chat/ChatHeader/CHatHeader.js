import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";
import { useNavigate } from "react-router";
import "./chatHeader.css";
export default function CHatHeader({ roomName }) {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate(`/`);
  };
  return (
    <div className="chatHeader-container">
      <div className="chatHeader-row">
        <div className="headerLeft">{roomName}</div>
        <div className="headerRight">
          <CloseOutlinedIcon onClick={() => closeHandler()} />
        </div>
      </div>
    </div>
  );
}
