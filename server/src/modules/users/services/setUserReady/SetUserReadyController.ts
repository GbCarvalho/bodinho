import { SetUserReadyService } from "./SetUserReadyService";

class SetUserReadyController {
  constructor(private setUserReadyService: SetUserReadyService) {}

  handle(sid: string) {
    this.setUserReadyService.execute(sid);
  }
}

export { SetUserReadyController };
