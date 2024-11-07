import { Request, Response, NextFunction } from 'express';

export type MiddleWareFunction = (
  req: Request | any,
  res: Response | any,
  next: NextFunction
) => unknown;
