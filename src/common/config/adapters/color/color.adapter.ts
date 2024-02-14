interface handler {
  info(color: string): string;
  warning(color: string): string;
  error(color: string): string;
  success(color: string): string;
}

export abstract class ColorAdapter implements handler {
  abstract info(color: string): string;
  abstract warning(color: string): string;
  abstract error(color: string): string;
  abstract success(color: string): string;
  abstract primary(color: string): string;
}
