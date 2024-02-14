import jwt from 'jsonwebtoken';
import { jwtAdapterInfrastructure } from './jwt.adapter.infrastructure';

export const jwtAdapter = new jwtAdapterInfrastructure(jwt);
