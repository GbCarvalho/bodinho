import { Server, Socket } from "socket.io";
import { registerUserHandler } from "~~/server/src/handlers/userHandler";

export default defineEventHandler(({ res }) => {
  const { server } = res.socket as any;
  if (server.io) return;
  console.log("Socket is initializing");
  const { io } = server;

  server.io = new Server(server);

  const onConnection = (socket: Socket) => {
    registerUserHandler(io, socket);
  };

  io.on("connection", onConnection);
});
