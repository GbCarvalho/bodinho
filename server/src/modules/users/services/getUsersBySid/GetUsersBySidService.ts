import { User } from "../../model/User";
import {
  IUsersRepository,
} from "../../repositories/IUsersRepository";

class GetUsersBySidService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(sid: string): User | undefined{
    return this.usersRepository.findBySid(sid);
  }
}

export { GetUsersBySidService };
