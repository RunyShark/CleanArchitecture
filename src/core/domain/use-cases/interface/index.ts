export interface GenericUseCase<Args, Response> {
  execute(args?: Args): Promise<Response>;
}

interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserResponse {
  token: string;
  user: User;
}
