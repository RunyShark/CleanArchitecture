import { UserModel } from 'src/core/db';
import { Router } from 'express';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  AuthDataSourceMongo,
  AuthRepositoryImpl,
} from 'src/core/infrastructure';
import { encrypt } from '@adapters/encrypt/encrypt.adapter';
import { AuthMiddleware } from '@presentation/middleware';

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
interface Route {
  path: string;
  method: Method;
  action: string;
}

const routes: Route[] = [
  {
    path: '/login',
    method: Method.POST,
    action: 'login',
  },
  {
    path: '/register',
    method: Method.POST,
    action: 'register',
  },
];

export class AuthRouter {
  constructor(private readonly router: Router) {}

  get routes(): Router {
    const authRepository = new AuthRepositoryImpl(
      new AuthDataSourceMongo(UserModel, encrypt)
    );

    const authController = new AuthController(new AuthService(authRepository));

    routes.forEach(({ action, method, path }) =>
      this.router[method](path, authController[action as keyof AuthController])
    );

    this.router.get('/', [AuthMiddleware.validateJWT], authController.getUsers);

    return this.router;
  }
}
