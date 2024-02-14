interface Handlers {
  sign(
    payload: string | object,
    secretOrPrivateKey: string,
    options: any
  ): Promise<string | null>;
  verify<T>(token: string, secret: string): Promise<T | null>;
}

export abstract class JwtAdapterDomain implements Handlers {
  abstract sign(
    payload: string | object,
    secretOrPrivateKey: string,
    options: any
  ): Promise<string | null>;
  abstract verify<T>(token: string, secret: string): Promise<T | null>;
}
