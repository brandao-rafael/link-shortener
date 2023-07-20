import { NextFunction, Request, Response } from 'express';
import ShortenerService from '../services/shortener.service';

export default class ShortenerController {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async generateShortUrl() {
    try {
      const { originalUrl, customWord } = this.req.body;
      const shortUrl = await ShortenerService.shortUrl(originalUrl, customWord);
      if(!shortUrl) {
        return this.res.status(400).json({message: 'url already exists'});
      }
      return this.res.status(201).json({shortUrl});
    } catch(error) {
      console.log(error);
      
      this.next(error);
    }
  }

  public async redirect() {
    try {
      const { word } = this.req.params;
      const originalUrl = await ShortenerService.redirect(word as string);
      if (!originalUrl) {
        return this.res.status(404).json({message: 'url not found'});
      }
      return this.res.redirect(originalUrl);
      
    } catch (error) {
      this.next(error);
    }
  }
}