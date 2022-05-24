import { Server, Socket } from "socket.io";
import { createUserController } from "../modules/users/services/createUser";
import { getUsersBySidController } from "../modules/users/services/getUsersBySid";
import { getUsersInRoomController } from "../modules/users/services/getUsersInRoom";
import { readyUserController } from "../modules/users/services/readyUser";

function registerUserHandler(io: Server, socket: Socket) {
  socket.on("join", (user, callback) => {
    const newUser = createUserController.handle(user);
    socket.join(newUser.room);
    io.in(newUser.room).emit("joined", newUser.nick);

    const usersInRoom = getUsersInRoomController.handle(newUser.room);
    callback({ users: usersInRoom, user: newUser });
  });

  socket.on("ready", () => {
    const user = getUsersBySidController.handle(socket.id);
    readyUserController.handle(user.sid);
    socket.to(user.room).emit("ready", user.nick);
  });

  socket.on("sendMessage", (message) => {
    console.log(socket.id);
    const user = getUsersBySidController.handle(socket.id);
    io.in(user.room).emit("message", message);
  });

  socket.on("disconnecting", () => {
    const user = getUsersBySidController.handle(socket.id);
    socket.to(user.room).emit("leave", user.nick);
  });
}

export { registerUserHandler };
