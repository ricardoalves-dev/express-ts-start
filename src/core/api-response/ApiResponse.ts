import z from 'zod';

const schema = z.union([
  z.array(z.any()),
  z.looseObject({})
]);

export class ApiResponse<T extends object> {
  readonly data!: T;
  readonly numberOfRecords: number = 1;

  constructor(data: T) {
    schema.parse(data);
    this.data = data;

    if (Array.isArray(data)) {
      this.numberOfRecords = data.length;
      return;
    }

    if (this.isEmptyObject(data)) {
      this.numberOfRecords = 0;
    }
  }

  private isEmptyObject(obj: unknown): obj is object {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      Object.keys(obj).length === 0 &&
      obj.constructor === Object
    );
  }
}
