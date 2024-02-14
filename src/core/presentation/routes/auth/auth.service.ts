import { Catch } from '@decorators/Catch.decorator';
import {
  ApiResponse,
  GetAllUserUseCase,
  RegisterUser,
  RegisterUserDto,
  UserEntity,
  UserResponse,
} from 'src/core/domain';
import { AuthRepository } from '../../../domain/repositories/auth.repository';

@Catch
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

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

    const newUser = await new RegisterUser(this.authRepository).execute(
      registerUserDto!
    );

    return ApiResponse.successHandle<UserResponse>(newUser);
  }

  async getUsers() {
    const result = await new GetAllUserUseCase(this.authRepository).execute();

    return ApiResponse.successHandle<UserEntity[]>(result);
  }
}
