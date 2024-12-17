import { PaymentProcessor } from "../abstract-factory.interface";

export class PaypalPayment implements PaymentProcessor{
    processPayment(amount: number): string {
        return `Processed ${amount} amount using paypal`
    }
}