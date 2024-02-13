import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { BindMethods } from 'src/common/decorators';

@BindMethods
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(req: Request, res: Response) {
    res.json(this.authService.login());
  }

  register(req: Request, res: Response) {
    res.json({ message: 'register' });
  }
}
