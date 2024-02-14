import { Validators } from '@helpers/validators';

export class RegisterUserDto {
  private constructor(
    public email: string,
    public password: string,
    public name: string
  ) {}

  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { email, password, name } = object;

    if (!email) return ['Email is required'];
    if (!Validators.email.test(email)) return ['Invalid email'];
    if (!password) return ['password is required'];
    if (password.length < 6) return ['password must be at least 6 characters'];
    if (!name) return ['name is required'];

    return [, new RegisterUserDto(email, password, name)];
  }
}
