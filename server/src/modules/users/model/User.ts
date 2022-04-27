class User {
  sid: string;
  nick: string;
  room: string;
  life: number;
  ready: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.life = 66;
    this.ready = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
