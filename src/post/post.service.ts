import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Post } from './models/post.model';

@Injectable()
export class PostService {
    private lastPostId = 0;
    private posts: Post[] = [];

    getAllPosts(){
        return this.posts
    }

    getPostById(id: string){
        const post = this.posts.find((post: Post) => {post.id === id} )
        if(post){
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND) 
    }

    replacePost(id: string, post: UpdatePostDto){
        const postIndex = this.posts.findIndex((post: Post) => {post.id === id} )
        if(postIndex > -1){
            this.posts[postIndex] = <Post>post;
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND) 
    }
    
    createPost(post: CreatePostDto){
        const newPost = {
            id: ++this.lastPostId,
            ...post,
        }

        this.posts.push(<Post>newPost)
        return newPost
    }

    deletePost(id: string){
        const postIndex = this.posts.findIndex((post: Post) => {post.id === id} )
        if(postIndex > -1){
            this.posts.splice(postIndex, 1)
        }
        else{
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND) 
        }
    }
}
