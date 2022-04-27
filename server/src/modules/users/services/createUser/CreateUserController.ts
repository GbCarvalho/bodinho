import { ICreateUserDTO } from "../../repositories/IUsersRepository";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  handle(user: ICreateUserDTO) {
    const newUser = this.createUserService.execute(user);
    return newUser;
  }
}

export { CreateUserController };
