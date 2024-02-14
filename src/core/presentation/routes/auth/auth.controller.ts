import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { BindMethods } from '@decorators/BindMethods.decorator';

@BindMethods
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response) {
    res.json(await this.authService.login());
  }

  async register(req: Request, res: Response) {
    res.json(await this.authService.register());
  }
}
