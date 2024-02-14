import bcrypt from 'bcrypt';
import { BcryptAdapterInfrastructure } from './bcrypt.adapter.infrastructure';

export const encrypt = new BcryptAdapterInfrastructure(bcrypt);
