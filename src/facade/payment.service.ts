import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of amount ${amount}`);
    return true; // Assume payment is successful
  }
}
