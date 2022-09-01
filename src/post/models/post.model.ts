import { Document, Schema } from "mongoose";

const PostSchema = new Schema(
    {
        title: String,
        description: String,
        content: String,
    },
    {
        timestamps: true,
        collection: 'posts'
    }
)
export {PostSchema}

export interface Post extends Document{
    title: String,
    description: String,
    content: String,
}