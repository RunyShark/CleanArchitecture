import express, { Express, Router } from 'express';
import { ServerAdapter } from '@adapters/server/server.adapter';
import morgan from 'morgan';

interface ServerConfiguration {
  port: number;
  server: ServerAdapter;
}

export class Server {
  private readonly server: Express;
  private readonly router: Router;
  private readonly port: number;

  constructor({ port, server }: ServerConfiguration) {
    this.port = port;
    this.server = server.app<Express>();
    this.router = server.router<Router>();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan('dev'));
  }

  private routerApp(): void {
    this.server.use(this.router);
  }

  private listen() {
    this.server.listen(this.port, () =>
      console.log(`Server is now running and listening on port ${this.port}.`)
    );
  }

  async start() {
    this.middleware();
    this.routerApp();
    this.listen();
  }
}
