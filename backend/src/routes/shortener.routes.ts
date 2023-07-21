import { Router } from 'express';
import ShortenerController from '../controllers/shortener.controller';
import validateCreateBody from '../middlewares/validateCreateBody';

const router = Router();

router.post(
  '/shorten',
  validateCreateBody,
  (req, res, next) => new ShortenerController(req, res, next).generateShortUrl(),
);

router.get(
  '/:word',
  (req, res, next) => new ShortenerController(req, res, next).redirect(),
)

export default router;