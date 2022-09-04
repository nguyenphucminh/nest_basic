import { FilterQuery, Model, QueryOptions, Document } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(doc): Promise<any> {
    const createEntity = new this.model(doc);
    return await createEntity.save();
  }

  async findById(id: string, option?: QueryOptions): Promise<T> {
    return this.model.findById(id, option);
  }

  async findByCodition(
    filter,
    field?: any | null,
    option?: any | null,
    populate?: any | null,
  ): Promise<T> {
    return (await this.model.findOne(filter, field, option)).populated(
      populate,
    );
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async aggregate(option: any) {
    return this.model.aggregate(option);
  }

  async populate(result: T[], option: any) {
    return await this.model.populate(result, option);
  }

  async deleteOne(id: string) {
    return this.model.deleteOne({ _id: id } as FilterQuery<T>);
  }

  async deleteMany(id: string) {
    return this.model.deleteMany({ _id: { $in: id } } as FilterQuery<T>);
  }

  async deleteByCondition(filter) {
    return this.model.deleteMany(filter);
  }

  async findByConditionAndUpdate(filter, update) {
    return this.model.findOneAndUpdate(filter as FilterQuery<T>, update);
  }

  async updateMany(filter, update, option?: any | null, callback?: any | null) {
    return this.model.updateMany(filter, update, option, callback);
  }

  async findByIdAndUpdate(id, update) {
    return this.model.findByIdAndUpdate(id, update);
  }
}
