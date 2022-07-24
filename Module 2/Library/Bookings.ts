import { IBookings, IBookingItem } from './types';
import { Validator } from './Validator';

export class Bookings implements IBookings {
  private bookings: IBookingItem[] = [];
  private borrowedBooks: any[] = [];

  public showBookings() {
    return this.bookings;
  }
  public borrowBook(bookUuid: string, userUuid: string): void {
    this.bookings.push({
      borrowed: { book: bookUuid, user: userUuid },
      borrowedDate: new Date(Date.now()).getDate(),
      dateOfReturn: new Date(Date.now()).getDate() - 5,
    });
  }
  private addBookToBorrowed(bookUuid: string) {
    Validator.checkIfExists(this.borrowedBooks, bookUuid, 'beforeAdd');
    this.borrowedBooks.push(bookUuid);
  }
  private deleteBookBorrowed(bookUuid: string) {
    Validator.checkIfExists(this.borrowedBooks, bookUuid, 'toDelete');
    this.deleteBookUuidFromBorrowed(bookUuid);
  }
  private deleteBookUuidFromBorrowed(bookUuid: string) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.uuid !== bookUuid
    );
  }
  public giveBackBook(bookUuid: string, userUuid: string): any {
    Validator.checkBooking(this.bookings, bookUuid, 'book');
    Validator.checkBooking(this.bookings, userUuid, 'user');
    const findBooking = this.bookings.find(
      (booking) =>
        booking.borrowed.book === bookUuid && booking.borrowed.user == userUuid
    );

    const punischment = this.checkIfItWasReturnedOnTIme(findBooking);
    this.deleteBooking(bookUuid, userUuid);
    return { userUuid, punischment };
  }
  private checkIfItWasReturnedOnTIme(booking: any) {
    const actualyDate = new Date();
    let diffrenceInDays = 0;
    let punischment = 50;

    if (booking.dateOfReturn < actualyDate.getDate()) {
      diffrenceInDays = actualyDate.getDate() - booking.dateOfReturn;
      punischment = punischment * diffrenceInDays;
    }
    return punischment;
  }
  private deleteBooking(bookUuid: string, userUuid: string) {
    this.bookings = this.bookings.filter(
      (booking) =>
        booking.borrowed.book !== bookUuid && booking.borrowed.user !== userUuid
    );
  }
}
