import { Request, Response } from 'express';

const notFound = (req: Request | any, res: Response | any) =>
  res.status(404).send('Route does not exist');

export default notFound;
