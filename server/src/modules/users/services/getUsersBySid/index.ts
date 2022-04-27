import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GetUsersBySidController } from "./GetUsersBySidController";
import { GetUsersBySidService } from "./GetUsersBySidService";

const usersRepository = UsersRepository.getInstance();
const getUsersBySidService = new GetUsersBySidService(usersRepository);
const getUsersBySidController = new GetUsersBySidController(
  getUsersBySidService
);

export { getUsersBySidController };
