import { UserDetails } from './userDetails';

export class UserDetailsAdapter {
  private userDetails: UserDetails;

  constructor(userDetails: UserDetails) {
    this.userDetails = userDetails;
  }

  getFormattedUserDetails(): { fullName: string } {
    const userData = this.userDetails.getUserDetaiils();
    const formattedData = {
      fullName: `${userData.firstName} ${userData.lastName}`,
    };
    return formattedData;
  }
}
