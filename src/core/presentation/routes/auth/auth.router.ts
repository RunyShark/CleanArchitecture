import { Request, Response } from 'express';
import { Router } from 'express';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  AuthDataSourceMongo,
  AuthRepositoryImpl,
} from 'src/core/infrastructure';

export class AuthRouter {
  constructor(private readonly router: Router) {}

  get routes(): Router {
    const authRepository = new AuthRepositoryImpl(new AuthDataSourceMongo());

    const authController = new AuthController(new AuthService(authRepository));

    this.router.post('/login', authController.login);

    this.router.post('/register', authController.register);

    return this.router;
  }
}
