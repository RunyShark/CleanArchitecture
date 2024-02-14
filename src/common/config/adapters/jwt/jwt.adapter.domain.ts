interface Handlers {
  sign(
    payload: string | object,
    secretOrPrivateKey: string,
    options: any
  ): Promise<string | null>;
  verify(token: string, secret: string): Promise<boolean>;
}

export abstract class JwtAdapterDomain implements Handlers {
  abstract sign(
    payload: string | object,
    secretOrPrivateKey: string,
    options: any
  ): Promise<string | null>;
  abstract verify(token: string, secret: string): Promise<boolean>;
}
