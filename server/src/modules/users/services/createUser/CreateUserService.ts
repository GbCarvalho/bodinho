import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  sid: string;
  nick: string;
  room: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user: IRequest): User {
    return this.usersRepository.createUser(user);
  }
}

export { CreateUserService };
