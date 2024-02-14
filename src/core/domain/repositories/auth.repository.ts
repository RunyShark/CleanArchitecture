import { LoginUserDto, RegisterUserDto } from '../dtos';
import { UserEntity } from '../entities';

export abstract class AuthRepository {
  abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;
  abstract register(registerUser: RegisterUserDto): Promise<UserEntity>;
  abstract getUsers(): Promise<UserEntity[]>;
  abstract getUserById(id: string): Promise<UserEntity | null>;
}
