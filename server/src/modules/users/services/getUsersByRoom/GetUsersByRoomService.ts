import { User } from "../../model/User";
import {
  IGetUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

class GetUsersByRoomService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ nick, room }: IGetUserDTO): User[] {
    return this.usersRepository.getUsersInRoom(room);
  }
}

export { GetUsersByRoomService };
