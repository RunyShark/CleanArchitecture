import { Catch } from '@decorators/Catch.decorator';
import {
  ApiResponse,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from 'src/core/domain';
import { AuthRepository } from '../../../domain/repositories/auth.repository';
import { jwtAdapter } from '@adapters/jwt/jwt.adapter';
import { env } from 'process';

@Catch
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  private async generateToken(user: UserEntity) {
    const token = await jwtAdapter.sign({ id: user.id }, env.JWT_SECRET!, {
      expiresIn: '2h',
    });

    if (!token) throw CustomError.badRequest('Error to generate token');

    return token;
  }

  async login(dto: RegisterUserDto) {
    const [error, registerUserDto] = RegisterUserDto.create(dto);

    if (error)
      return ApiResponse.errorHandle<string>(error.statusError, error.message);

    const result = await this.authRepository.register(registerUserDto!);

    return ApiResponse.successHandle<UserEntity>(result);
  }

  async register(dto: RegisterUserDto) {
    const [error, registerUserDto] = RegisterUserDto.create(dto);

    if (error)
      return ApiResponse.errorHandle<string>(error.statusError, error.message);

    const result = await this.authRepository.register(registerUserDto!);

    const token = await this.generateToken(result);

    if (!token) throw CustomError.badRequest('Error to generate token');

    return ApiResponse.successHandle<UserEntity & { token: string }>({
      ...result,
      token,
    });
  }
}
