const express = require("express");
const socket = require("socket.io");
const path = require("path");
const cors = require("cors");
const http = require("http");
const { addUser, getUser } = require("./route/user");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static(path.join(__dirname, "../", "public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public", "index.html"));
});
const server = http.createServer(app);
const io = new socket.Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ userName, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, userName, room });
    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.userName}, welcome to the room`,
    });
    socket.broadcast.to(user.userRoom).emit("message", {
      user: "admin",
      text: `${user.userName}, has joinded`,
    });
    socket.join(user.userRoom);
    callback();
  });

  socket.on("sendMessage", ({ userName, message }, callback) => {
    const user = getUser(userName);
    io.to(user.userRoom).emit("message", {
      user: user.userName,
      text: message,
    });
    callback();
  });
  socket.on("disconnect", () => {
    console.log("socket is Disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is runing on port : ${PORT}`);
});
