import {
  AuthDataSource,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from 'src/core/domain';
import { AuthRepository } from '../../domain/repositories/auth.repository';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}

  login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.authDataSource.login(loginUserDto);
  }

  getUserById(id: string): Promise<UserEntity | null> {
    return this.authDataSource.getUserById(id);
  }
  getUsers(): Promise<UserEntity[]> {
    return this.authDataSource.getUsers();
  }

  register(registerUser: RegisterUserDto): Promise<UserEntity> {
    return this.authDataSource.register(registerUser);
  }
}
