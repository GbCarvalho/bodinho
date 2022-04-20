import { Server } from "socket.io";

class room {
  users: {};
  id: String;

  constructor(users, room) {
    this.users = users;
  }
}

export default defineEventHandler(({ req, res }) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("input-change", (msg) => {
        console.log("Msg: ", msg);
        socket.broadcast.emit("update-input", msg);
      });
    });
  }

  res.end();
});
