import { Injectable } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { PaymentService } from './payment.service';
import { OrderService } from './order.service';

@Injectable()
export class ShoppingFacade {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly paymentService: PaymentService,
    private readonly orderService: OrderService,
  ) {}

  placeOrder(productId: string, quantity: number, paymentAmount: number): string {
    if (!this.inventoryService.checkStock(productId, quantity)) {
      throw new Error('Product is out of stock');
    }

    if (!this.paymentService.processPayment(paymentAmount)) {
      throw new Error('Payment failed');
    }

    return this.orderService.createOrder(productId, quantity);
  }
}
