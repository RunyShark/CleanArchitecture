interface Handler {
  encrypt(plainText: string): Promise<string>;
  compare(plainText: string, encrypted: string): Promise<boolean>;
}

export abstract class EncryptAdapterDomain implements Handler {
  abstract encrypt(plainText: string): Promise<string>;

  abstract compare(plainText: string, encrypted: string): Promise<boolean>;
}
