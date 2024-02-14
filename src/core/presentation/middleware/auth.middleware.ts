import { env } from '@adapters/env';
import { jwtAdapter } from '@adapters/jwt/jwt.adapter';
import { NextFunction, Request, Response } from 'express';
import { ApiResponse, CustomError } from 'src/core/domain';

export class AuthMiddleware {
  static validateJWT = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const authorization = req.header('Authorization');
    if (!authorization)
      return res.status(401).json({ error: 'No token provided' });
    if (!authorization.startsWith('Bearer '))
      return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';

    const isValidToken = await jwtAdapter.verify(token, env.jwt_secret);

    if (!isValidToken) return res.status(401).json({ error: 'Invalid token' });

    try {
      next();
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internal();
    }
  };
}
