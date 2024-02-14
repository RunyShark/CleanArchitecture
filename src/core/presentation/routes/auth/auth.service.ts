import { Catch } from '@decorators/Catch.decorator';
import { ApiResponse, RegisterUserDto, UserEntity } from 'src/core/domain';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

@Catch
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async login(dto: RegisterUserDto) {
    const [error, registerUserDto] = RegisterUserDto.create(dto);

    if (error) return ApiResponse.errorHandle<string>(error);

    const result = await this.authRepository.register(registerUserDto!);

    return ApiResponse.successHandle<UserEntity>(result);
  }

  async register(dto: RegisterUserDto) {
    const [error, registerUserDto] = RegisterUserDto.create(dto);

    if (error) return ApiResponse.errorHandle<string>(error);

    const result = await this.authRepository.register(registerUserDto!);

    return ApiResponse.successHandle<UserEntity>(result);
  }
}
