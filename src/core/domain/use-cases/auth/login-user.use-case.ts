import { jwtAdapter } from '@adapters/jwt/jwt.adapter';
import { LoginUserDto } from '../../dtos';
import { UserEntity } from '../../entities';
import { AuthRepository } from '../../repositories';
import { GenericUseCase, UserResponse } from '../interface';
import { env } from '@adapters/env';
import { CustomError } from '../../errors';

export class LoginUserUseCase
  implements GenericUseCase<LoginUserDto, UserResponse>
{
  constructor(private readonly authRepository: AuthRepository) {}

  private async generateToken(user: UserEntity) {
    const token = await jwtAdapter.sign({ id: user.id }, env.jwt_secret!, {
      expiresIn: '2h',
    });

    if (!token) throw CustomError.internal('Error to generate token');

    return token;
  }

  async execute(dto: LoginUserDto): Promise<UserResponse> {
    const result = await this.authRepository.login(dto);

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
