import { Users } from './Users';
import { Books } from './Books';
import { Bookings } from './Bookings';
import { Validator } from './Validator';
import { IUser, IBook, ILibrary } from './types';

class Library implements ILibrary {
  public users: any = new Users();
  private books: any = new Books();
  private bookings: any = new Bookings();

  public showUsers() {
    return this.users.returnListOfUsers();
  }
  public showBooks() {
    return this.books.returnListOfBooks();
  }
  public showBookings() {
    return this.bookings.showBookings();
  }
  public showAvailableBooks() {
    return this.availableBooks(this.books.books, this.bookings.bookings);
  }
  public addUser(userDetails: IUser): void {
    this.users.addUser(userDetails);
  }
  public deleteUser(userUuid: string): void {
    this.users.deleteUser(userUuid);
  }
  public addBook(bookDetails: IBook): void {
    this.books.addBook(bookDetails);
  }
  public deleteBook(bookUuid: string): void {
    this.books.deleteBook(bookUuid);
  }
  public borrowBook(bookUuid: string, userUuid: string): void {
    this.bookingValidator(bookUuid, userUuid);
    this.bookings.borrowBook(bookUuid, userUuid);
  }
  public giveBackBook(bookUuid: string, userUuid: string): void {
    const result = this.bookings.giveBackBook(bookUuid, userUuid);
    console.log(result);
  }
  private bookingValidator(bookUuid: string, userUuid: string): void {
    Validator.checkIfExists(this.users.users, userUuid, 'toDelete');
    Validator.checkIfExists(this.books.books, bookUuid, 'toDelete');
  }
  private availableBooks(): void {
    const findBooking = this.bookings.bookings.map(
      (el: any) => el.borrowed.book
    );
    return this.books.books = this.books.books.filter(
      (book: any) => !findBooking.includes(book.uuid)
    );
  }
}

const library = new Library();
library.addUser({
  name: 'Andrzej',
  surname: 'Brzeczek',
  uuid: '1233asd1441231231i2123',
});
library.addUser({
  name: 'Kacper',
  surname: 'Brzeczek',
  uuid: '1233assad123d1441231231i2123',
});
library.addUser({
  name: 'Bartej',
  surname: 'Brzeczek',
  uuid: '1233asasdd1441231231i2123',
});
library.addBook({
  title: 'Zwierzeta',
  author: 'Andrzej',
  uuid: '123123123',
  image: '123134',
  description: 'O zwierzetach',
});
library.addBook({
  title: 'Koty',
  author: 'Andrzej',
  uuid: '12312443123',
  image: '123134',
  description: 'O kotach',
});
library.addBook({
  title: 'Psy',
  author: 'Andrzej',
  uuid: '123124333343123',
  image: '123134',
  description: 'O kotach',
});
library.addBook({
  title: 'Zwierzeta',
  author: 'Andrzej',
  uuid: '12312123443123',
  image: '123134',
  description: 'O kotach',
});
library.addBook({
  title: 'Konie',
  author: 'Andrzej',
  uuid: '1231212324534656zd3443123',
  image: '123134',
  description: 'O kotach',
});
library.borrowBook('1231212324534656zd3443123', '1233asd1441231231i2123');
library.giveBackBook('1231212324534656zd3443123', '1233asd1441231231i2123');
// // library.deleteBook('1233asd1441231231i2123')
// library.borrowBook(
//   {
//     bookUuid: '1231212324534656zd3443123',
//     userUuid: '1233assad123d1441231231i2123',
//   },
//   '21312312312'
// );
// library.borrowBook(
//   {
//     bookUuid: '12312123443123',
//     userUuid: '1233asd1441231231i2123',
//   },
//   '21312312313131312'
// );
// library.showBookings();
// library.showAvailableBooks();
// library.giveBackBook('21312312313131312');
// library.showUsers();
// library.showBookings();
