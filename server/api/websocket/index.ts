import { Server, Socket } from "socket.io";
import { registerUserHandler } from "~~/server/src/handlers/userHandler";

export default defineEventHandler(({ res }) => {
  const { server } = res.socket as any;
  console.log(server);

  if (server.io) return;

  server.io = new Server(server, {
    path: "/api/websocket",
  });

  const { io } = server;

  const onConnection = (socket: Socket) => {
    console.log(JSON.stringify(res));

    registerUserHandler(io, socket);
  };

  io.on("connection", onConnection);
});
