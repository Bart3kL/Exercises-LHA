export class Validator {
  static checkLength(element: any) {
    if (element.length <= 1) throw new Error('Enter valid element!');
  }
  static checkIfExists(array: any, elementId: string, situation: string) {
    if (situation === 'beforeAdd') {
      const findElement = array.find((el: any) => el.uuid == elementId);
      if (findElement) throw new Error('This element already exists');
    }
    if (situation === 'toDelete') {
      const findElement = array.find((el: any) => el.uuid == elementId);
      if (!findElement) throw new Error('This element doesnt exists');
    }
  }
  static checkBookingDetails(bookingDetails: any, books: any, users: any) {
    const checkIfBookExists = books.books.find(
      (book: any) => book.uuid === bookingDetails.bookUuid
    );
    if (!checkIfBookExists) throw new Error('This book doenst exists');
    const checkIfUserExists = users.users.find(
      (user: any) => user.uuid === bookingDetails.userUuid
    );
    if (!checkIfUserExists) throw new Error('This book doenst exists');
  }
  static checkIfBookingExists(array: any, bookingUuid: string) {
    const findBooking = array.find((book: any) => book.uuid === bookingUuid);
    if (!findBooking) throw new Error('This booking doesnt exists!');
    return findBooking;
  }
  static checkBooking(array: any, id: string, situation: string) {
    if (situation == 'book') {
      const findBook = array[0].borrowed.book === id;
      if (!findBook) throw new Error('This book doesnt exists');

    }
    if (situation == 'user') {
      const findBook = array[0].borrowed.user === id;
      if (!findBook) throw new Error('This user doesnt exists');

    }
  
  }
}
