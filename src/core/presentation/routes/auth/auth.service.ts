import { Catch } from '@decorators/Catch.decorator';
import { ApiResponse } from '@rules/ApiResponse';

@Catch
export class AuthService {
  constructor() {}

  login() {
    return ApiResponse.successHandle<string>('login');
  }

  register() {
    return ApiResponse.successHandle<string>('register');
  }
}
