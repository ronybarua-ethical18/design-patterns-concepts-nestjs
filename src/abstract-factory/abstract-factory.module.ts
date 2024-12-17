import { Module } from '@nestjs/common';
import { AbstractFactoryService } from './abstract-factory.service';
import { AbstractFactoryController } from './abstract-factory.controller';
import { PaypalFactory, StripeFactory } from './factories/factories';

@Module({
  providers: [
    {
      provide: 'PaymentFactory',
      useClass: PaypalFactory,
    },
    AbstractFactoryService,
  ],
  controllers: [AbstractFactoryController],
})

// Key Point
// The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
// This decoupling is the essence of the Abstract Factory Pattern!

// Key Benefits
// Separation of Concerns: Factories handle object creation, while the service or controller focuses on business logic.
// Scalability: Adding new families of objects (e.g., a new payment processor) doesn't require changing the existing service/controller.
// Dependency Injection Ready: Abstract factories work seamlessly with DI systems like NestJS, making it easy to inject the desired factory dynamically.

// Example
// Scenario:
// You want to switch between Stripe and PayPal in your payment processing logic.

// Without Abstract Factory:
// You would need to change your service code every time you switch payment processors.

// With Abstract Factory:
// You simply swap the injected factory at the module level:

export class AbstractFactoryModule {}
