// services/payment.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { PaymentAbstractFactory } from './abstract-factory.interface';

@Injectable()
export class AbstractFactoryService {
  private paymentProcessor;

  constructor(@Inject('PaymentFactory') private readonly factory: PaymentAbstractFactory) {
    this.paymentProcessor = this.factory.createPaymentProcessor()
  }

  process(amount: number): string {
    return this.paymentProcessor.processPayment(amount)
  }
}
