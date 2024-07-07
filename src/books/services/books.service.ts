import { Injectable } from '@nestjs/common';
import { Book } from '../../types';
import { prisma } from 'src/db';

@Injectable()
export class BookService {
  public async books(): Promise<Book[]> {
    const allBooks = await prisma.book.findMany({});
    return allBooks;
  }

  public async findById(id: number): Promise<Book | null> {
    const existingBook = await prisma.book.findUnique({ where: { id } });
    if (!existingBook) return null;
    return existingBook;
  }

  public async newBook({
    id,
    title,
    author,
    publicationYear,
  }: Book): Promise<Book> {
    const newBook = await prisma.book.create({
      data: {
        id,
        title,
        author,
        publicationYear,
      },
    });

    return newBook;
  }

  public async deleteById(id: number): Promise<Book> {
    const deletedBook = await prisma.book.delete({ where: { id } });

    return deletedBook;
  }

  public async updateById(book: Partial<Book>): Promise<Book> {
    const updatedBook = await prisma.book.update({
      where: { id: book.id },
      data: { ...book },
    });

    return updatedBook;
  }
}
