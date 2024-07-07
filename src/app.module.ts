import { Module } from '@nestjs/common';
import { GreetController } from './app.controller';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [GreetController],
  providers: [],
})
export class AppModule {}
