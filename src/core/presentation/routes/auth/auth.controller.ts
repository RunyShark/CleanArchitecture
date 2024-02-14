import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { BindMethods } from '@decorators/BindMethods.decorator';

@BindMethods
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response) {
    const response = await this.authService.login(req.body);

    return res.status(response.state).json(response);
  }

  async register(req: Request, res: Response) {
    res.json(await this.authService.register(req.body));
  }

  async getUsers(req: Request, res: Response) {
    res.json(await this.authService.getUsers());
  }
}
