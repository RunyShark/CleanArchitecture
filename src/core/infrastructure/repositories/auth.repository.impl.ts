import { AuthDataSource, RegisterUserDto, UserEntity } from 'src/core/domain';
import { AuthRepository } from '../../domain/repositories/auth.repository';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}
  getUsers(): Promise<UserEntity[]> {
    return this.authDataSource.getUsers();
  }

  register(registerUser: RegisterUserDto): Promise<UserEntity> {
    return this.authDataSource.register(registerUser);
  }
}
