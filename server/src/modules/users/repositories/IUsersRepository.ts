import { User } from "../model/User";

interface ICreateUserDTO {
  sid: string;
  nick: string;
  room: string;
}

interface IUsersRepository {
  createUser({ sid, nick, room }: ICreateUserDTO): User;
  findBySid( sid: string): User;
  getUsersInRoom(room: string): User[];
  readyUser(sid): void;
}

export { IUsersRepository, ICreateUserDTO };
