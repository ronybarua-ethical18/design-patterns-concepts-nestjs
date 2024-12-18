import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  createOrder(productId: string, quantity: number): string {
    console.log(`Creating order for product ${productId} with quantity ${quantity}`);
    return 'order123'; // Mock order ID
  }
}
