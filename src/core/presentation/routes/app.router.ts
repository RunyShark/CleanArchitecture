import { Router } from 'express';
import { AuthRouter } from './auth';

export enum ValidRoutes {
  auth = 'auth',
}

export class AppRoutes {
  constructor(private readonly router: Router) {}
  get routes(): Router {
    const authController = new AuthRouter(this.router).routes;

    this.router.use(`/api/${ValidRoutes.auth}`, authController);

    return this.router;
  }
}
