import { CustomError, UserEntity } from 'src/core/domain';

export class UserMapper {
  static toEntity(object: Record<string, any>): UserEntity {
    const { _id, id, email, password, name, roles, img = '' } = object;

    if (!_id || !id) throw CustomError.badGateway('Missing user id');

    if (!email) throw CustomError.badGateway('Missing user email');

    if (!name) throw CustomError.badGateway('Missing user name');

    if (!roles) throw CustomError.badGateway('Missing user roles');

    return new UserEntity(_id || id, email, password, name, roles, img);
  }
}
