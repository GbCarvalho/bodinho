import { User } from "../../model/User";
import {
  IUsersRepository,
} from "../../repositories/IUsersRepository";

class GetUsersInRoomService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(room: string): User[] | undefined{
    return this.usersRepository.getUsersInRoom(room);
  }
}

export { GetUsersInRoomService };
