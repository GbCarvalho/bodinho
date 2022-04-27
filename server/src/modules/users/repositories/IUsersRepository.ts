import User from "../model/User";

interface ICreateUserDTO {
  sid: string;
  nick: string;
  room: string;
}

interface IUsersRepository {
  createUser({ sid, nick, room }: ICreateUserDTO): User;
  findBySid( sid: string): User | undefined;
  getUsersInRoom(room: string): User[];
}

export { IUsersRepository, ICreateUserDTO };
