export interface IUser {
  name: string;
  surname: string;
  uuid: string;
  punischment?: string;
}
export interface IUsers {
  addUser(userDetails: IUser): void;
  deleteUser(userUuid: string): void;
  returnListOfUsers(): void;
}
export interface IBook {
  title: string;
  author: string;
  uuid: string;
  image: string;
  description: string;
}
export interface IBooks {
  addBook(userDetails: IBook): void;
  deleteBook(bookUuid: string): void;
  returnListOfBooks(): void;
}
export interface IBooking {
  bookUuid: string;
  userUuid: string;
}
export interface IBookingItem {
  borrowed: { book: string; user: string };
  borrowedDate: number;
  dateOfReturn: number;
}
export interface IBookings {
  showBookings(): void;
  borrowBook(bookUuid: string, userUuid: string): void;
  giveBackBook(bookUuid: string, userUuid: string):void
}

export interface ILibrary {
  showUsers(): void;
  showBooks(): void;
  showBookings(): void;
  showAvailableBooks(): void;
  addUser(userDetails: IUser): void;
  deleteUser(userUuid: string): void;
  addBook(bookDetails: IBook): void;
  deleteBook(bookUuid: string): void;
  borrowBook(bookUuid: string, userUuid: string): void;
  giveBackBook(bookUuid: string, userUuid: string): void;
}
