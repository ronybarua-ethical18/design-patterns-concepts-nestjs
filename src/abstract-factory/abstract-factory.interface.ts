export interface PaymentProcessor {
  processPayment(amount: number): string;
}

export interface PaymentAbstractFactory {
  createPaymentProcessor(): PaymentProcessor;
}
