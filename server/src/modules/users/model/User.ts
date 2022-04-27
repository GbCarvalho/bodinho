import { v4 as uuid } from "uuid";

class User {
  id?: string;
  nick: string;
  room: string;
  life: number;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    this.life = 66;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
