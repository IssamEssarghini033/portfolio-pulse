import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { User } from './auth/entities/user';
import { BlogPost } from './blog-post/entities/blog-post.entity';
import { AuthModule } from './auth/auth.module';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      url: process.env.REDIS_URL,
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [BlogPost, User],
      autoLoadEntities: true,
      synchronize: true,
      logging: true, 
    }),
    TypeOrmModule.forFeature([BlogPost]),
    AuthModule,
    BlogPostModule

  ],
})
export class AppModule {}