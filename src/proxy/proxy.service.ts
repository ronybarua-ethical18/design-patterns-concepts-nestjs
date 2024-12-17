// proxy.service.ts
import { Injectable } from '@nestjs/common';
import { UserProxy } from './user.proxy';

@Injectable()
export class ProxyService {
  private userProxy: UserProxy;

  constructor() {
    this.userProxy = new UserProxy();
  }

  getUserData(userId: number): { id: number; name: string } {
    return this.userProxy.getUserData(userId);
  }
}
