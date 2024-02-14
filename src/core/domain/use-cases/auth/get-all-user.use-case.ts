import { UserEntity } from '../../entities';
import { AuthRepository } from '../../repositories';
import { GenericUseCase } from '../interface/index';

export class GetAllUserUseCase implements GenericUseCase<{}, UserEntity[]> {
  constructor(private readonly authRepository: AuthRepository) {}
  async execute(): Promise<UserEntity[]> {
    const result = await this.authRepository.getUsers();

    return result;
  }
}
