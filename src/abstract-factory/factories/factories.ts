import {
  PaymentAbstractFactory,
  PaymentProcessor,
} from '../abstract-factory.interface';
import { PaypalPayment } from '../processors/paypal-processor';
import { StripePayment } from '../processors/stripe-processor';

export class StripeFactory implements PaymentAbstractFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new StripePayment();
  }
}

export class PaypalFactory implements PaymentAbstractFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new PaypalPayment();
  }
}
