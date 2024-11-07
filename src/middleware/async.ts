import { Request, Response, NextFunction } from 'express';
import { MiddleWareFunction } from '../types';

const asyncWrapper = (fn: MiddleWareFunction) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrapper;
