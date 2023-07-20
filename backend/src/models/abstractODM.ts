import { Model, Schema, model, models } from "mongoose";

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(this.modelName, this.schema);
  }

  public async create(data: T): Promise<T> {
    const result = await this.model.create({...data});
    return { id: result._id, ...data};
  }

  public async getFullUrl(shortUrl: string): Promise<T | null> {
    const result = await this.model.findOne({shortUrl: shortUrl});
    return result;
  }
}