import { Request, Response, NextFunction } from 'express';
import createShortUrlSchema from '../validations/schema';

export default function validateCreateBody (req: Request, res: Response, next: NextFunction) {
  const payload = req.body;
  const { error } = createShortUrlSchema.validate(payload);

  if(error) {
    return res.status(400).json({message: 'Some fields are invalids'});
  }

  next();
}