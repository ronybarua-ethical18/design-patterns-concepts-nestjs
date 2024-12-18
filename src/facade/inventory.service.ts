import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  checkStock(productId: string, quantity: number): boolean {
    console.log(`Checking stock for product ${productId} with quantity ${quantity}`);
    return true; // Assume stock is available for simplicity
  }
}