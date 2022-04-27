import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ReadyUserController } from "./ReadyUserController";
import { ReadyUserService } from "./ReadyUserService";

const usersRepository = UsersRepository.getInstance();
const readyUserService = new ReadyUserService(usersRepository);
const readyUserController = new ReadyUserController(readyUserService);

export { readyUserController };
