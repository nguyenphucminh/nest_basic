import { PostRepository } from './repositories/post.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}
  getAllPosts() {
    return this.postRepository;
  }

  getPostById(post_id: string) {
    const post = this.postRepository.findById(post_id);
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async replacePost(post_id: string, data: UpdatePostDto) {
    return await this.postRepository.findByIdAndUpdate(post_id, data);
  }

  async createPost(post: CreatePostDto) {
    return await this.postRepository.create(post);
  }

  async deletePost(post_id: string) {
    return await this.postRepository.deleteOne(post_id);
  }
}
