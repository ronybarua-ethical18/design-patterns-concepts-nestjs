import { Post, Body, Controller } from '@nestjs/common';
import { ShoppingFacade } from './shopping.facade';

@Controller('facade')
export class FacadeController {
  constructor(private readonly facadeService: ShoppingFacade) {}

  @Post('order')
  placeOrder(
    @Body('productId') productId: string,
    @Body('quantity') quantity: number,
    @Body('paymentAmount') paymentAmount: number,
  ): string {
    try {
      const orderId = this.facadeService.placeOrder(productId, quantity, paymentAmount);
      return `Order placed successfully! Order ID: ${orderId}`;
    } catch (error) {
      return error.message;
    }
  }
}
