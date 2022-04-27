import User from "../model/User";

interface ICreateUserDTO {
  nick: string;
  room: string;
}

interface IGetUserDTO {
  nick: string;
  room: string;
}

interface IUsersRepository {
  createUser({ nick, room }: ICreateUserDTO): User;
  findByNick({ nick, room }: IGetUserDTO): User | undefined;
  getUsersInRoom(room: string): User[];
}

export { IUsersRepository, ICreateUserDTO, IGetUserDTO };
