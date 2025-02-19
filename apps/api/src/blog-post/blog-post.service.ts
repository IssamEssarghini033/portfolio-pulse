import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectRepository(BlogPost)
    private readonly blogPostRepository: Repository<BlogPost>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,

  ) {}

  async create(blogPost: Partial<BlogPost>): Promise<BlogPost> {
    return this.blogPostRepository.save(blogPost);
  }

  async findAll(): Promise<BlogPost[]> {
    const cachedData: BlogPost[] = await this.cacheManager.get('blog-posts');
    if (cachedData) {
      return cachedData;
    }

    const data = await this.blogPostRepository.find();
    await this.cacheManager.set('blog-posts', data, 60000);
    return data;
  }

  async findOne(id: string): Promise<BlogPost> {
    return this.blogPostRepository.findOne({ where: { id } });
  }

  async update(id: string, blogPost: Partial<BlogPost>): Promise<BlogPost> {
    await this.blogPostRepository.update(id, blogPost);
    return this.blogPostRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.blogPostRepository.delete(id);
  }
}