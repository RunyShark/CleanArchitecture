import { RegisterUserDto } from '../dtos';
import { UserEntity } from '../entities';

export abstract class AuthDataSource {
  abstract register(registerUser: RegisterUserDto): Promise<UserEntity>;
  abstract getUsers(): Promise<UserEntity[]>;
  abstract getUserById(id: string): Promise<UserEntity | null>;
}
