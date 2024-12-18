import { Module } from '@nestjs/common';
import { FacadeController } from './facade.controller';
import { ShoppingFacade } from './shopping.facade';
import { InventoryService } from './inventory.service';
import { PaymentService } from './payment.service';
import { OrderService } from './order.service';

@Module({
  controllers: [FacadeController],
  providers: [InventoryService, PaymentService, OrderService, ShoppingFacade],
})
export class FacadeModule {}

/* facade pattern combine the logic from all services and expose a simplified interface

Benefits
Simplified Interface: Controllers interact with a single facade instead of multiple services.
Separation of Concerns: Each service focuses on its domain-specific task.
Loose Coupling: Changes to the underlying services don't directly affect the controller.

If a service is not listed in the providers array, NestJS won't know how to create and inject it when another class requests it.

Even if a class is not named something.service.ts, if it's intended to provide some logic or data via DI, it should also go into the providers array

*/
