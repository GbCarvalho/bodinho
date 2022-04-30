import { Server } from "socket.io";
import { createUserController } from "../../src/modules/users/services/createUser";
import { getUsersBySidController } from "../../src/modules/users/services/getUsersBySid";
import { getUsersInRoomController } from "../../src/modules/users/services/getUsersInRoom";
import { readyUserController } from "../../src/modules/users/services/readyUser";


export default defineEventHandler(({res}) => {
  const socket = res.socket as any;
  if (socket.server.io) return;

  console.log("Socket is initializing");
  socket.server.io = new Server(socket.server);

  socket.server.io.on("connection", (soc) => {
    soc.on("join", (user, callback) => {
      const newUser = createUserController.handle(user)
      soc.join(newUser.room);
      socket.server.io.in(newUser.room).emit("joined", newUser.nick);

      const usersInRoom = getUsersInRoomController.handle(newUser.room);
      callback({ users: usersInRoom });
    });

    soc.on("ready", () => {
      const user = getUsersBySidController.handle(soc.id);
      readyUserController.handle(user.sid);
      soc.to(user.room).emit("ready", user.nick);
    })

    soc.on("sendMessage", (message) => {
      console.log(soc.id);
      const user = getUsersBySidController.handle(soc.id);
      socket.server.io.in(user.room).emit("message", message);
    });

    soc.on("disconnecting", () => {
      const user = getUsersBySidController.handle(soc.id);
      soc.to(user.room).emit("leave", user.nick);
    });
  });
});
