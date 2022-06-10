import { AppError } from '../errors/error.model';

export enum API_RESPONSE_STATUS {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

/**
 * Standard API request object
 */
export type APIRequestBody<Payload> = {
  /**
   * Name of the API
   * @example 'website admin api'
   */
  api: string;
  /**
   * The request payload
   */
  payload: Payload;
};

/**
 * Standard API response object
 */
export type APIResponseBody<Payload> = {
  /**
   * Name of the API
   * @example 'website admin api'
   */
  api: string;
  /**
   * General status for the response
   */
  status: API_RESPONSE_STATUS;
  /**
   * Friendly message for users
   */
  message: string;
  /**
   * The response errors
   */
  errors: AppError[];
  /**
   * The response payload
   */
  payload?: Payload;
};
