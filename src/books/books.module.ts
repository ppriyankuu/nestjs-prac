import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BookService } from './services/books.service';
import { AuthTokenValidation } from 'src/middleware/index.middleware';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BookService],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthTokenValidation)
      .forRoutes({ path: 'books/*', method: RequestMethod.ALL });
  }
}
