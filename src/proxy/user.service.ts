// The real object whose access we want to control.

export class UserService {
  getUserData(userId: number): { id: number; name: string } {
    // Simulate fetching user data
    console.log('Fetching user data...');
    return { id: userId, name: 'John Doe' };
  }
}
