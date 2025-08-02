export class Logger {

  public constructor(readonly loggerClass: new () => any) { }

  public info(message: string) {
    console.info(`INFO [${this.loggerClass.name}] ${message}`);
  }

  public debug(message: string) {
    console.debug(`DEBUG [${this.loggerClass.name}] ${message}`);
  }

  public error(message: string) {
    console.error(`ERROR [${this.loggerClass.name}] ${message}`);
  }

  public warn(message: string) {
    console.warn(`WARN [${this.loggerClass.name}] ${message}`);
  }

  public group(message: string) {
    console.group(` => [${this.loggerClass.name}] ${message}`);
  }

  public groupEnd() {
    console.groupEnd();
    console.log();
  }
}