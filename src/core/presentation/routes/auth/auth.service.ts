import { Catch } from '@decorators/Catch.decorator';
import {
  ApiResponse,
  GetAllUserUseCase,
  LoginUserDto,
  LoginUserUseCase,
  RegisterUser,
  RegisterUserDto,
  UserEntity,
} from 'src/core/domain';
import { AuthRepository } from '../../../domain/repositories/auth.repository';
import { UserResponse } from 'src/core/domain/use-cases/interface';

@Catch
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async login(dto: LoginUserDto) {
    const [error, loginUserDto] = LoginUserDto.create(dto);

    if (error)
      return ApiResponse.errorHandle<string>(error.statusError, error.message);

    const userLogin = await new LoginUserUseCase(this.authRepository).execute(
      loginUserDto!
    );

    return ApiResponse.successHandle<UserResponse>(userLogin);
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
