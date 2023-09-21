const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:5173" },
});
const PORT = 3001;

io.on("connection", (socket) => {
  socket.on("set_username", (username) => {
    console.log(`Ben-Vindo ${username}!`);
    socket.data.username = username;
    // username(username, socket.id)

    console.log(`Bem-Vindo ${username} seu id é ${socket.id}!`);
  });
  socket.on("message", (text) => {
    io.emit("receive_message", {
      text,
      authorID: socket.id,
      author: socket.data.username,
    });
    console.log(`Usuario ${socket.data.username} enviou uma mensagem!`);
  });
  socket.on("disconnect", (reason) => {
    console.log(`${socket.data.username} desconectado, motivo: ${reason}`);
  });
});

server.listen(PORT, () => {
  console.log("Server running...");
});
