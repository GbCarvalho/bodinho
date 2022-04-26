import { Server } from "socket.io";

export default defineEventHandler(({ req, res, context }) => {
  console.log("Socket is initializing");
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    socket.on("ready", (data) => {
      socket.to(data.room).emit();
    });
  });

  res.end();
});
