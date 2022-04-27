import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GetUsersByRoomController } from "./GetUsersByRoomController";
import { GetUsersByRoomService } from "./GetUsersByRoomService";

const usersRepository = UsersRepository.getInstance();
const getUsersByRoomService = new GetUsersByRoomService(usersRepository);
const getUsersByRoomController = new GetUsersByRoomController(
  getUsersByRoomService
);

export { getUsersByRoomController };
