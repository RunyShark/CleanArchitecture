import { Express, Router } from 'express';
import { ServerAdapter } from '@adapters/server/server.adapter';
import { AppRoutes } from '..';
import { AppMiddleware } from '@presentation/middleware';
import { color } from '@adapters/color/color-adapter';

interface ServerConfigurationOptionalProps {
  port: number;
}

interface ServerConfiguration
  extends Partial<ServerConfigurationOptionalProps> {
  server: ServerAdapter;
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
          `Server is now running and listening on port ${this.port}.`
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
