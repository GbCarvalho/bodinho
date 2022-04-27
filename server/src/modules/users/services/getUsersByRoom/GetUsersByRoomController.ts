import { IGetUserDTO } from "../../repositories/IUsersRepository";
import { GetUsersByRoomService } from "./GetUsersByRoomService";

class GetUsersByRoomController {
  constructor(private getUsersByRoomService: GetUsersByRoomService) {}

  handle(user: IGetUserDTO) {
    const users = this.getUsersByRoomService.execute(user);
    return users;
  }
}

export { GetUsersByRoomController };
