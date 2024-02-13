/**
 * Enum representing the possible states of a result.
 *
 * @enum {string}
 */
export enum ValidState {
  /** Represents a successful state. */
  OK = 'OK',
  /** Represents an error state. */
  Error = 'Error',
}

/**
 * Type representing a successful result.
 *
 * @template T The type of the message in a successful result.
 */
type Ok<T> = { state: ValidState.OK; message: T };

/**
 * Type representing an error result.
 *
 * @template E The type of the message in an error result.
 */
type Error<E> = { state: ValidState.Error; message: E };

/**
 * Type representing a result which can either be a success or an error.
 *
 * @template T The type of the message in a successful result.
 * @template E The type of the message in an error result.
 */
export type Result<T, E> = Ok<T> | Error<E>;

/**
 * Interface defining the contract for handling results.
 */
interface ReposeServiceHandle {
  /** Method to handle error messages and return an error result. */
  errorHandle: <E>(message: E) => Error<E>;
  /** Method to handle success messages and return a successful result. */
  successHandle: <T>(message: T) => Ok<T>;
}

/**
 * Service class implementing the ReposeServiceHandle for handling results.
 */
export class ReposeService implements ReposeServiceHandle {
  /**
   * Handles success messages and returns a successful result.
   *
   * @template T The type of the success message.
   * @param {T} message The success message.
   * @returns {Ok<T>} A successful result.
   */
  successHandle<T>(message: T): Ok<T> {
    return { state: ValidState.OK, message };
  }

  /**
   * Handles error messages and returns an error result.
   *
   * @template E The type of the error message.
   * @param {E} message The error message.
   * @returns {Error<E>} An error result.
   */
  errorHandle<E>(message: E): Error<E> {
    console.log('test', message);
    return { state: ValidState.Error, message };
  }
}
