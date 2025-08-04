import z from 'zod';

const schema = z.instanceof(Error);

export class ApiResponseError {
  constructor(readonly error: Error) {
    schema.parse(error);
  }

  toJSON() {
    return {
      message: this.error.message,
      stack: this.error.stack || 'Sem stack trace',
      name: this.error.name,
    };
  }
}