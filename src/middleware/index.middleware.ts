import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthTokenValidation implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('authenticaion middleware triggered');
    const token = req.cookies.auth_token;

    if (!token) return res.status(403).send('you are not allowed here :|');
    next();
  }
}
