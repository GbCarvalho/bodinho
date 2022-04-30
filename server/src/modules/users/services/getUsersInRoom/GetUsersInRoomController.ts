import { GetUsersInRoomService } from "./GetUsersInRoomService";

class GetUsersInRoomController {
  constructor(private getUsersInRoomService: GetUsersInRoomService) {}

  handle(room: string) {
    const users = this.getUsersInRoomService.execute(room);
    return users;
  }
}

export { GetUsersInRoomController };
