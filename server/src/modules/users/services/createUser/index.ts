import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const usersRepository = UsersRepository.getInstance();
const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
