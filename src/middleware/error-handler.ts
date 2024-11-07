import { Request, Response, NextFunction } from 'express';
import { CustomAPIError } from '../errors/custom';

const errorHandler = (
  err: CustomAPIError | Error,
  req: Request | any,
  res: Response | any,
  next: NextFunction
) => {
  return err instanceof CustomAPIError
    ? res.status(err.statusCode).json({ message: err.message })
    : res
        .status(500)
        .json({ message: 'Something wetn wrong, please try again' });
};

export default errorHandler;
