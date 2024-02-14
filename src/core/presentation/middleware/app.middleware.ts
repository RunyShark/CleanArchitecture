import { env } from '@adapters/env';
import express, { Express } from 'express';
import morgan from 'morgan';

export class AppMiddleware {
  constructor(private readonly server: Express) {}

  init() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan(env.node_env));
  }
}
