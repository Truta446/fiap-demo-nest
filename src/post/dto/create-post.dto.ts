import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreatePostDto {
  @IsEmail()
  @ApiProperty({
    description: 'The title of the post.',
  })
  public title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'The content of the post.',
    required: false,
  })
  public content?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The user of the post.',
  })
  public author: User;
}
