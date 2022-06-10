import { ERROR_TYPE } from './error.constant';

export class AppError extends Error {
  name!: ERROR_TYPE;
  message!: string;
  value?: any;
  stack?: string;
  constructor(options: AppError) {
    super(options.message);
    this.name = options.name as ERROR_TYPE;
    this.stack = options.stack ? options.stack : undefined;
    this.value = options.value ? options.value : undefined;
  }
}
