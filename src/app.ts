import { env, expressServer } from '@adapters/index';
import { Server } from '@presentation/index';
import { MongoDB } from './core/db';

(() => main())();

async function main() {
  await MongoDB.connect({
    dbName: env.mongo_db_name,
    mongoUrl: env.mongo_url,
  });

  new Server({
    port: env.port,
    server: expressServer,
  }).start();
}
