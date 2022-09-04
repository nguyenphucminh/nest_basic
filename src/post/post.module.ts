import { PostRepository } from './repositories/post.repository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './models/post.model';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
