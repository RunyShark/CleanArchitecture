import { Request, Response } from 'express';
import { Router } from 'express';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

export class AuthRouter {
  constructor(private readonly router: Router) {}

  get routes(): Router {
    const authController = new AuthController(new AuthService());

    this.router.post('/login', authController.login);

    this.router.post('/register', authController.register);

    return this.router;
  }
}
