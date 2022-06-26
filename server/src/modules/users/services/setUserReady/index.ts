import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { SetUserReadyController } from "./SetUserReadyController";
import { SetUserReadyService } from "./SetUserReadyService";

const usersRepository = UsersRepository.getInstance();
const setUserReadyService = new SetUserReadyService(usersRepository);
const setUserReady = new SetUserReadyController(setUserReadyService);

export { setUserReady };
