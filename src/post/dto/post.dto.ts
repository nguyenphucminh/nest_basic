import { IsNotEmpty } from 'class-validator';
export class CreatePostDto {
  @IsNotEmpty()
  description: string;
  content: string;
  title: string;
}
export class UpdatePostDto {
  @IsNotEmpty()
  id: string;
  content: string;
  title: string;
  description: string;
}
