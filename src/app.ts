import express, { Express, Router } from 'express';
import { env, expressServer } from '@adapters/index';
import { AppRoutes, Server } from '@presentation/index';

(() => main())();

async function main() {
  new Server({
    port: env.port,
    server: expressServer,
  }).start();
}
