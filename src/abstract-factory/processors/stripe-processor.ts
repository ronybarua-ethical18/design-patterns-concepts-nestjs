import { PaymentProcessor } from "../abstract-factory.interface";

export class StripePayment implements PaymentProcessor{
    processPayment(amount: number): string {
        return `Processed ${amount} amount using stripe`
    }
}