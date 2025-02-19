import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './entities/blog-post.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('blog-posts')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() blogPost: Partial<BlogPost>): Promise<BlogPost> {
    return this.blogPostService.create(blogPost);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<BlogPost[]> {
    return this.blogPostService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<BlogPost> {
    return this.blogPostService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() blogPost: Partial<BlogPost>): Promise<BlogPost> {
    return this.blogPostService.update(id, blogPost);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.blogPostService.remove(id);
  }
}