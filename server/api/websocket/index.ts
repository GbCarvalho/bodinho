import { Server, Socket } from "socket.io";
import { registerUserHandler } from "@/server/src/handlers/userHandler";

export default defineEventHandler(({ res }) => {
  const { server } = res.socket as any;

  if (server.io) return;

  server.io = new Server(server);

  const { io } = server;

  const onConnection = (socket: Socket) => {
    registerUserHandler(io, socket);
  };

  io.on("connection", onConnection);
});
