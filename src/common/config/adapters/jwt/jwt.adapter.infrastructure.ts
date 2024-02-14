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

  verify(token: string, secret: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.jwtFn.verify(token, secret, (err) => {
        if (err) resolve(false);
        resolve(true);
      });
    });
  }
}
