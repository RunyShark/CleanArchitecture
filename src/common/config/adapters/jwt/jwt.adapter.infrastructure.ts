import jwt, { SignOptions } from 'jsonwebtoken';
import { JwtAdapterDomain } from './jwt.adapter.domain';

export class jwtAdapterInfrastructure implements JwtAdapterDomain {
  constructor(private readonly jwtFn: typeof jwt) {}
  async sign(
    payload: string | object,
    secretOrPrivateKey: string,
    options: SignOptions = {
      expiresIn: '2h',
    }
  ): Promise<string | null> {
    return new Promise((resolve) => {
      this.jwtFn.sign(payload, secretOrPrivateKey, options, (err, token) => {
        if (err) resolve(null);
        resolve(token!);
      });
    });
  }

  async verify<T>(token: string, secret: string): Promise<T | null> {
    return new Promise((resolve) => {
      this.jwtFn.verify(token, secret, (err, decode) => {
        if (err) resolve(null);
        resolve(decode as T);
      });
    });
  }
}
