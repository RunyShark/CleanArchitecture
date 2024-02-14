import { Express, Router } from 'express';

import { AppRoutes } from '..';
import { AppMiddleware } from '@presentation/middleware';
import { color } from '@adapters/color/color-adapter';
import { ServerAdapterDomain } from '@adapters/server/server.adapter.domain';

interface ServerConfigurationOptionalProps {
  port: number;
}

interface ServerConfiguration
  extends Partial<ServerConfigurationOptionalProps> {
  server: ServerAdapterDomain;
}

export class Server {
  private readonly server: Express;
  private readonly router: Router;
  private readonly port: number;

  constructor({ server, port = 3000 }: ServerConfiguration) {
    this.server = server.app<Express>();
    this.router = server.router<Router>();
    this.port = port;
  }

  private middleware() {
    new AppMiddleware(this.server).init();
  }

  private routerApp() {
    this.server.use(new AppRoutes(this.router).routes);
  }

  private listen(): void {
    this.server.listen(this.port, () =>
      console.log(
        color.success(
          `Server is now running and listening on port ${color.primary(
            `${this.port}`
          )}`
        )
      )
    );
  }

  async start(): Promise<void> {
    this.middleware();
    this.routerApp();
    this.listen();
  }
}
