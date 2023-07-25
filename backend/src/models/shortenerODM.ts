import { Schema } from "mongoose";
import IShortener from "../interfaces/iShortener";
import AbstractODM from "./abstractODM";

export default class ShortenerODM extends AbstractODM<IShortener> {
  constructor() {
    const schema = new Schema<IShortener>({
      id: { type: String, required: false },
      shortUrl: { type: String, required: true },
      originalUrl: { type: String, required: true },
    })
    super(schema, 'linkShortener');
  }

}