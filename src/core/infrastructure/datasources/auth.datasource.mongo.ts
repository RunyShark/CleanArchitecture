import { CustomError, RegisterUserDto, UserEntity } from 'src/core/domain';
import { AuthDataSource } from 'src/core/domain/datasources';

export class AuthDataSourceMongo extends AuthDataSource {
  register(registerUser: RegisterUserDto): Promise<UserEntity> {
    const { email, password, name } = registerUser;
    try {
      return Promise.resolve(
        new UserEntity('1', name, email, password, ['user'])
      );
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internal();
    }
  }
}
