export class Health {
  readonly uptime: number;
  readonly message: string;
  readonly date: Date;

  constructor() {
    this.uptime = process.uptime();
    this.message = 'OK';
    this.date = new Date();
  }
}