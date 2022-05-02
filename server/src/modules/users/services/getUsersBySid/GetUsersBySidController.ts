import { GetUsersBySidService } from "./GetUsersBySidService";

class GetUsersBySidController {
  constructor(private getUsersBySidService: GetUsersBySidService) {}

  handle(sid: string) {
    const users = this.getUsersBySidService.execute(sid);
    return users;
  }
}

export { GetUsersBySidController };
