import { User } from "../../model/User";
import {
  ICreateUserDTO,
  IGetUserDTO,
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

  createUser({ nick, room }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      nick,
      room,
    });

    this.users.push(user);
    return user;
  }

  findByNick({ nick, room }: IGetUserDTO) {
    return this.users.find((user) => user.nick === nick && user.room === room);
  }

  getUsersInRoom(room: string) {
    return this.users.filter((user) => user.room === room);
  }
}

export { UsersRepository };
