import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ReadyUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(sid: string): void {
    return this.usersRepository.readyUser(sid);
  }
}

export { ReadyUserService };
