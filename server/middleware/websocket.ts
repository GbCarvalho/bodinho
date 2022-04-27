import { Server } from "socket.io";
import { createUserController } from "../src/modules/users/services/createUser";
import { getUsersBySidController } from "../src/modules/users/services/getUsersBySid";

export default defineEventHandler(({res}) => {
  const socket = res.socket as any;
  if (socket.server.io) return;

  console.log("Socket is initializing");
  socket.server.io = new Server(socket.server);

  socket.server.io.on("connection", (soc) => {
    soc.on("join", (user) => {
      const newUser = createUserController.handle(user)
      soc.join(newUser.room);
      soc.to(newUser.room).emit("joined", `${newUser.nick} joined the room ${newUser.room}`);
    });

    soc.on("sendMessage", (message) => {
      console.log(soc.id);
      const user = getUsersBySidController.handle(soc.id);
      soc.to(user.room).emit("message", message);
    });
  });
})
