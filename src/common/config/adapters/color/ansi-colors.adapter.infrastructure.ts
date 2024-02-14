import colors from 'ansi-colors';
import { ColorAdapterDomain } from './color.adapter.domain';

export class AnsiColorsAdapterInfrastructure implements ColorAdapterDomain {
  constructor(private readonly colorsFn: typeof colors) {}

  info(color: string): string {
    return this.colorsFn.bold.blue(color);
  }

  warning(color: string): string {
    return this.colorsFn.bold.yellow(color);
  }

  error(color: string): string {
    return this.colorsFn.bold.red(color);
  }

  success(color: string): string {
    return this.colorsFn.green(color);
  }

  primary(color: string): string {
    return this.colorsFn.bold.magenta(color);
  }
}
