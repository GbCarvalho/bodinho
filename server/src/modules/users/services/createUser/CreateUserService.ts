import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  nick: string;
  room: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user: IRequest): User {
    if (this.usersRepository.findByNick(user)) {
      throw new Error("Nick already in use in this room");
    }

    return this.usersRepository.createUser(user);
  }
}

export { CreateUserService };
