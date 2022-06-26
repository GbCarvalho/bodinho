import { IUsersRepository } from "../../repositories/IUsersRepository";

class SetUserReadyService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(sid: string): void {
    return this.usersRepository.readyUser(sid);
  }
}

export { SetUserReadyService };
