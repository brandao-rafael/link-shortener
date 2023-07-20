import ShortenerODM from "../models/shortenerODM";
import 'dotenv/config';

const shortenerODM = new ShortenerODM();

export default class ShortenerService {
  
  static async shortUrl(originalUrl: string, word: string):Promise<string | null> {
    const shortUrl = `${process.env.DOMAIN}/${word}` || `http://localhost:3005/${word}`;
    const all = await shortenerODM.getAll();
    
    if (all.some((url) => url.shortUrl = shortUrl)) {
      return null;
    } else {
      await shortenerODM.create({originalUrl, shortUrl});
      return shortUrl;
    }
  }

  static async redirect(word: string):Promise<string | null> {
    const shortUrl = `${process.env.DOMAIN}/${word}` || `http://localhost:3005/${word}`;
    const urls = await shortenerODM.getFullUrl(shortUrl);
    
    if(!urls?.originalUrl) return null;

    return urls.originalUrl;
  }
}