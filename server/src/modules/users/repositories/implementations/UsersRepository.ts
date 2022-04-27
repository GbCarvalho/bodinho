import { User } from "../../model/User";
import {
  ICreateUserDTO,
  IUsersRepository,
} from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];
  private static INSTANCE: IUsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  createUser({ sid, nick, room }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      sid,
      nick,
      room,
    });

    this.users.push(user);
    return user;
  }

  findBySid( sid: string) {
    return this.users.find((user) => user.sid === sid);
  }

  getUsersInRoom(room: string) {
    return this.users.filter((user) => user.room === room);
  }
}

export { UsersRepository };
