import { Express, Router } from 'express';
import { ServerAdapter } from './server.adapter';

export class ExpressAdapter implements ServerAdapter {
  constructor(
    private readonly server: Express,
    private readonly routerAdapter: Router
  ) {}

  app<T>(): T {
    return this.server as T;
  }

  router<T>(): T {
    return this.routerAdapter as T;
  }
}
