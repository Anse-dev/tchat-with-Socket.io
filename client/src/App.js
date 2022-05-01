import { Route, Routes } from "react-router";
import ChatContainer from "./components/Chat/ChatContainer/ChatContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat/:userName/:room" element={<ChatContainer />} />
      </Routes>
    </div>
  );
}

export default App;
