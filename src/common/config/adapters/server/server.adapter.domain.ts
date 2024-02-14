interface Handler {
  app<T>(): T;
  router<T>(): T;
}

export abstract class ServerAdapterDomain implements Handler {
  abstract app<T>(): T;
  abstract router<T>(): T;
}
