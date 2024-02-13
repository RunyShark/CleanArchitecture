import express, { Router } from 'express';
import { ExpressAdapter } from './express.adapter';

export const expressServer = new ExpressAdapter(express(), Router());
