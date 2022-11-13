import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'If the post has already been published.',
  })
  public published: boolean;
}
