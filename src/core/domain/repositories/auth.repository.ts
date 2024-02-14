import { RegisterUserDto } from '../dtos';
import { UserEntity } from '../entities';

export abstract class AuthRepository {
  // abstract login(email: string, password: string): Promise<UserEntity>;
  abstract register(registerUser: RegisterUserDto): Promise<UserEntity>;
  abstract getUsers(): Promise<UserEntity[]>;
}
