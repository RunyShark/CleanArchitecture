import { Catch } from '@decorators/Catch.decorator';
import { ApiResponse, RegisterUserDto } from 'src/core/domain';

@Catch
export class AuthService {
  constructor() {}

  login(dto: RegisterUserDto) {
    const [error, result] = RegisterUserDto.create(dto);

    if (error) return ApiResponse.errorHandle<string>(error);

    return ApiResponse.successHandle<RegisterUserDto>(result!);
  }

  register() {
    return ApiResponse.successHandle<string>('register');
  }
}
