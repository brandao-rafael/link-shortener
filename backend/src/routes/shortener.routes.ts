import { Router } from 'express';
import ShortenerController from '../controllers/shortener.controller';

const router = Router();

router.post(
  '/shorten',
  (req, res, next) => new ShortenerController(req, res, next).generateShortUrl(),
);

router.get(
  '/:word',
  (req, res, next) => new ShortenerController(req, res, next).redirect(),
)

export default router;