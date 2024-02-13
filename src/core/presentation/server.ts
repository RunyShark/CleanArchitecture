import express from 'express';

interface ServerConfiguration {
  port: number;
}

export class Server {
  private app = express();
  private readonly port: number;

  constructor({ port }: ServerConfiguration) {
    this.port = port;
  }

  private listen() {
    this.app.listen(this.port, () =>
      console.log('Server is running on port 3000')
    );
  }

  async start() {
    this.listen();
  }
}
