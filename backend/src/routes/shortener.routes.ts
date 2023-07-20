import { Router } from 'express';
import ShortenerController from '../controllers/shortener.controller';

const router = Router();

router.post(
  '/',
  (req, res, next) => new ShortenerController(req, res, next).generateShortUrl(),
)

export default router;