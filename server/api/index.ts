import { Server } from "socket.io";
export default defineEventHandler(({ req, res }) => {
  if (res.socket.server.io) {
    console.log("Socket already initialized");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    res.socket.server.io.on("connection", (socket) => {
    });
  }

  res.end();
});
