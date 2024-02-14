export enum ValidState {
  OK = 200,
  Error = 400,
}

type Ok<T> = { state: ValidState.OK; data: T };

type Error<E> = { state: number; data: E };

export type Result<T, E> = Ok<T> | Error<E>;

export class ApiResponse {
  static successHandle<T>(data: T): Ok<T> {
    return { state: ValidState.OK, data };
  }

  static errorHandle<E>(state: number, data: E): Error<E> {
    return { state, data };
  }
}
