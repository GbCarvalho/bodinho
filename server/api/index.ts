import { Server } from "socket.io";
import { createUserController } from "../src/modules/users/services/createUser";

export default defineEventHandler(({ req, res }) => {
  if (res.socket.server.io) {
    console.log("Socket already initialized");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    res.socket.server.io.on("connection", (socket) => {
      socket.on("joinRoom", (req) => {
        console.log(req);
        const user = createUserController.handle(req);

        socket.join(user.room);

        socket.broadcast.to(user.room).emit("userJoined", user);
      });

      socket.on("msg", (msg) => {
        console.log(msg);

        socket.emit("newMsg", msg);
      });
    });
  }

  res.end();
});
