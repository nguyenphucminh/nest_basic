import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PostService } from './post.service';
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPost() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post);
  }

  @Put('id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postService.replacePost(id, post);
  }

  @Delete('id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
