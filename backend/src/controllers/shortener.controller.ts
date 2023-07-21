import { NextFunction, Request, Response } from 'express';
import ShortenerService from '../services/shortener.service';

export default class ShortenerController {

  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction
  ) {}

  public async generateShortUrl() {
    try {
      const { originalUrl, customWord } = this.req.body;
      const shortUrl = await ShortenerService.shortUrl(originalUrl, customWord);
      if(!shortUrl) {
        return this.res.status(409).json({message: 'url already exists'});
      }
      return this.res.status(201).json({shortUrl});
    } catch(error) {
      this.next(error);
    }
  }

  public async redirect() {
    try {
      const { word } = this.req.params;
      const originalUrl = await ShortenerService.toRoute(word);
      if (!originalUrl) {
        return this.res.status(404).json({message: 'url not found'});
      }
      return this.res.redirect(originalUrl);
    } catch (error) {
      this.next(error);
    }
  }
}