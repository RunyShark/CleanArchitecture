import { Validators } from '@helpers/validators';
import { CustomError } from '../../errors';

export class RegisterUserDto {
  private constructor(
    public email: string,
    public password: string,
    public name: string
  ) {}

  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static create(object: {
    [key: string]: any;
  }): [CustomError?, RegisterUserDto?] {
    const { email, password, name } = object;

    if (!email) return [CustomError.badRequest('email is required')];
    if (!Validators.email.test(email))
      return [CustomError.badRequest('invalid email')];
    if (!password) return [CustomError.badRequest('password is required')];
    if (password.length < 6)
      return [CustomError.badRequest('invalid password')];
    if (!name) return [CustomError.badRequest('name is required')];

    return [, new RegisterUserDto(email, password, name)];
  }
}
