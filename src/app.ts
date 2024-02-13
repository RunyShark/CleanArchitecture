import { env } from '@adapters/env';
import { Server } from '@presentation/index';

(() => main())();

async function main() {
  new Server({
    port: env.port,
  }).start();
}
