import ShortenerODM from "../models/shortenerODM";

const shortenerODM = new ShortenerODM();

export default class ShortenerService {
  
  static async ShortUrl(originalUrl: string, word: string) {
    const shortUrl = `${process.env.DOMAIN}/${word}` || `http://localhost:3005/${word}`;
    const all = await shortenerODM.getAll();
    if (all.some((url) => url.shortUrl = shortUrl)) {
      return null;
    } else {
      await shortenerODM.create({originalUrl, shortUrl});
      return shortUrl;
    }
  }
}