// The proxy class will control access to the UserService, adding logging functionality.

import { UserService } from './user.service';

export class UserProxy {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUserData(userId: number): { id: number; name: string } {
    console.log(`Accessing user data for userId: ${userId}`);
    return this.userService.getUserData(userId);
  }
}
