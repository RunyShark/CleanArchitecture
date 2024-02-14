import { jwtAdapter } from '@adapters/jwt/jwt.adapter';
import { RegisterUserDto } from '../../dtos/auth/register-user.dto';
import { UserEntity } from '../../entities';
import { AuthRepository } from '../../repositories';
import { CustomError } from '../../errors';
import { env } from '@adapters/env';
import { GenericUseCase, UserResponse } from '../interface';

export class RegisterUser
  implements GenericUseCase<RegisterUserDto, UserResponse>
{
  constructor(private readonly authRepository: AuthRepository) {}

  private async generateToken(user: UserEntity) {
    const token = await jwtAdapter.sign({ id: user.id }, env.jwt_secret!, {
      expiresIn: '2h',
    });

    if (!token) throw CustomError.internal('Error to generate token');

    return token;
  }

  async execute(registerUserDto: RegisterUserDto): Promise<UserResponse> {
    const result = await this.authRepository.register(registerUserDto!);

    const token = await this.generateToken(result);

    if (!token) throw CustomError.badRequest('Error to generate token');

    return {
      token,
      user: {
        id: result.id,
        email: result.email,
        name: result.name,
      },
    };
  }
}
