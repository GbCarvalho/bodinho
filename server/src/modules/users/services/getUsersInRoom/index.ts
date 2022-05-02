import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GetUsersInRoomController } from "./GetUsersInRoomController";
import { GetUsersInRoomService } from "./GetUsersInRoomService";

const usersRepository = UsersRepository.getInstance();
const getUsersInRoomService = new GetUsersInRoomService(usersRepository);
const getUsersInRoomController = new GetUsersInRoomController(
  getUsersInRoomService
);

export { getUsersInRoomController };
