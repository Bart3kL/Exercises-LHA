import { IBook, IBooks } from './types';
import { Validator } from './Validator';
export class Books implements IBooks {
  private books: any[] = [];

  public addBook(bookDetails: IBook): void {
    Validator.checkIfExists(this.books, bookDetails.uuid, 'beforeAdd');
    this.books.push(bookDetails);
  }
  public deleteBook(bookUuid: string): void {
    Validator.checkIfExists(this.books, bookUuid, 'toDelete');
    this.deleteBookFromListOfBooks(bookUuid);
  }
  public returnListOfBooks() {
    return this.books;
  }
  private deleteBookFromListOfBooks(bookUuid: string) {
    this.books = this.books.filter((book) => book.uuid !== bookUuid);
  }
}
