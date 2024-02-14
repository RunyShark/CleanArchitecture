import { EncryptAdapterDomain } from '@adapters/encrypt/encrypt.adapter.domain';
import { UserModel } from 'src/core/db';
import { CustomError, RegisterUserDto, UserEntity } from 'src/core/domain';
import { AuthDataSource } from 'src/core/domain/datasources';
import { UserMapper } from '../mappers';

export class AuthDataSourceMongo implements AuthDataSource {
  constructor(
    private readonly userModel: typeof UserModel,
    private readonly hash: EncryptAdapterDomain
  ) {}
  async getUserById(id: string): Promise<UserEntity | null> {
    const user = await this.userModel.findById(id);

    if (!user) return null;

    return UserMapper.toEntity(user);
  }

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userModel.find();

    if (!users) throw CustomError.notFound('Users not found');

    return users.map(UserMapper.toEntity);
  }

  async register(registerUser: RegisterUserDto): Promise<UserEntity> {
    const { email, password, name } = registerUser;
    try {
      const exists = await this.userModel.findOne({
        email,
      });

      if (exists) throw CustomError.badRequest('Email already exists');

      const user = await this.userModel.create({
        name,
        email,
        password: this.hash.encrypt(password),
      });

      await user.save();

      return UserMapper.toEntity(user);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internal();
    }
  }
}
