import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Book } from '../../types';
import { BookService } from '../services/books.service';

@Controller('books')
export class BooksController {
  private id: number = 11;

  constructor(private readonly service: BookService) {}

  @Get()
  public async getAllBooks(): Promise<Book[]> {
    const allBooks = await this.service.books();
    return allBooks;
  }

  @Get(':id')
  public async getBookById(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<{ success: boolean; book?: Book; message?: string }> {
    const book = await this.service.findById(id);
    if (!book) {
      return {
        success: false,
        message: 'book not found',
      };
    }
    return {
      success: true,
      book,
    };
  }

  @Post()
  public async addNewBook(
    @Body()
    book: Partial<Book>,
  ): Promise<{ success: boolean; newBook: Book }> {
    const newBook = await this.service.newBook({
      id: this.id++,
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
    });
    return { success: true, newBook };
  }

  @Delete()
  public async deleteById(
    @Query('id', ParseIntPipe) id: number,
  ): Promise<{ book: Book }> {
    const deletedBook = await this.service.deleteById(id);
    return { book: deletedBook };
  }

  @Put(':id')
  public async updateBook(
    @Param('id') id: string,
    @Body()
    book: Partial<Book>,
  ): Promise<Book> {
    const updatedBook = this.service.updateById({
      id: Number(id),
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
    });

    return updatedBook;
  }
}
