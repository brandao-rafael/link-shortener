import ShortenerODM from "../models/shortenerODM";
import 'dotenv/config';

export default class ShortenerService {

  private static DEFAULT_BASE_URL:string = process.env.DOMAIN || 'http://localhost:3005';
  private static shortenerODM: ShortenerODM = new ShortenerODM();

  private static generateShortUrl(word: string):string {
    return `${this.DEFAULT_BASE_URL}/${word}`;
  }
  
  static async shortUrl(originalUrl: string, word: string):Promise<string | null> {
    const shortUrl = this.generateShortUrl(word);
    const allData = await this.shortenerODM.getAll();
    // Complexity O(n)
    const isUrlOnDb = allData.some((urlData) => urlData.shortUrl === shortUrl);
    if (!isUrlOnDb) {
      await this.shortenerODM.create({originalUrl, shortUrl});
      return shortUrl;
    }
    return null;
  }

  static async toRoute(word: string):Promise<string | null> {
    const urls = await this.shortenerODM.getFullUrl(this.generateShortUrl(word));
    
    if(!urls?.originalUrl) return null;

    return urls.originalUrl;
  }
}