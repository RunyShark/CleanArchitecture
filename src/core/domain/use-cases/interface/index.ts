export interface GenericUseCase<Args, Response> {
  execute(args?: Args): Promise<Response>;
}
