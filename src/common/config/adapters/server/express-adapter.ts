import express, { Router } from 'express';
import { ExpressAdapterInfrastructure } from './express.adapter.infrastructure';

export const expressServer = new ExpressAdapterInfrastructure(
  express(),
  Router()
);
