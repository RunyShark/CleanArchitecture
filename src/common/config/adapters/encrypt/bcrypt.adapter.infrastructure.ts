import bcrypt from 'bcrypt';
import { EncryptAdapterDomain } from './encrypt.adapter.domain';

export class BcryptAdapterInfrastructure implements EncryptAdapterDomain {
  constructor(private readonly bcryptFn: typeof bcrypt) {}

  encrypt(plainText: string): Promise<string> {
    return this.bcryptFn.hash(plainText, 10);
  }

  compare(plainText: string, encrypted: string): Promise<boolean> {
    return this.bcryptFn.compare(plainText, encrypted);
  }
}
