import { env, expressServer } from '@adapters/index';
import { Server } from '@presentation/index';

(() => main())();

async function main() {
  new Server({
    port: env.port,
    server: expressServer,
  }).start();
}
