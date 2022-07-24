import { IUser, IUsers } from './types';
import { Validator } from './Validator';
export class Users implements IUsers {
  private users: any[] = [];

  public addUser(userDetails: IUser): void {
    Validator.checkIfExists(this.users, userDetails.uuid, 'beforeAdd');
    this.users.push(userDetails);
  }
  public deleteUser(userUuid: string): void {
    Validator.checkIfExists(this.users, userUuid, 'toDelete');
    this.deleteUserFromListOfUsers(userUuid);
  }
  public returnListOfUsers() {
    return this.users;
  }
  private deleteUserFromListOfUsers(userUuid: string) {
    this.users = this.users.filter((user) => user.uuid !== userUuid);
  }
}