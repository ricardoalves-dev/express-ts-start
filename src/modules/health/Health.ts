export class Health {
  readonly uptime: number;
  readonly message: string;
  readonly date: Date;
  readonly responseTimeInSeconds: number;

  constructor() {
    this.uptime = process.uptime();
    this.message = 'OK';
    this.date = new Date();
    this.responseTimeInSeconds = process.hrtime()[0];
  }
}