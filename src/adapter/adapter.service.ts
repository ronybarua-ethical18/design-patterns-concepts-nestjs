import { Injectable } from '@nestjs/common';
import { UserDetailsAdapter } from './utils/user.adapter';
import { UserDetails } from './utils/userDetails';

@Injectable()
export class AdapterService {
    private adapter:UserDetailsAdapter
    constructor(){
        const  user = new UserDetails()
        this.adapter = new UserDetailsAdapter(user)
    }

    getFormattedData():{fullName:string}{
        return this.adapter.getFormattedUserDetails()
    }


}
