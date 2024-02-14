interface Handler {
  encrypt(plainText: string): string;
  compare(plainText: string, encrypted: string): Promise<boolean>;
}

export abstract class EncryptAdapterDomain implements Handler {
  abstract encrypt(plainText: string): string;

  abstract compare(plainText: string, encrypted: string): Promise<boolean>;
}
