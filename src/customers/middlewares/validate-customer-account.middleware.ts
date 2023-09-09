import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log('valid: ', valid);
    console.log('Valdiate customer account');
    if (valid) {
      next();
    } else {
      res.status(401).send({ error: 'Account is invalid 2' });
    }
  }
}