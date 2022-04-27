import { ReadyUserService } from "./ReadyUserService";

class ReadyUserController {
  constructor(private readyUserService: ReadyUserService) {}

  handle(sid: string) {
    this.readyUserService.execute(sid);
  }
}

export { ReadyUserController };
