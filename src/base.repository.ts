import { Model, QueryOptions } from "mongoose";

export class BaseRepository<T extends Document>{
    constructor(private readonly model: Model<T>){}

    async create(doc): Promise <any>{
        const createEntity = new this.model(doc);
        return await createEntity.save();
    }

    async findById(id: string, option?: QueryOptions): Promise<T>{
        return this.model.findById(id, option)
    }

    async findByCodition(
        filter,
        field?: any | null,
        option?: any | null,
        populate?: any | null
    ): Promise<T>{
        return (await this.model.findOne(filter, field, option)).populated(populate)
    }

    async findAll(): Promise<T[]>{
        return this.model.find()
    }

}