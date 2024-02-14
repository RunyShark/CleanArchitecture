import { Express, Router } from 'express';
import { ServerAdapterDomain } from './server.adapter.domain';

export class ExpressAdapterInfrastructure implements ServerAdapterDomain {
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
