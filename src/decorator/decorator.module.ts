import { Module } from '@nestjs/common';
import { DecoratorController } from './decorator.controller';
import { LoggingMessageService } from './decorator.service';
import { MessageService } from './message.service';

@Module({
  controllers: [DecoratorController],
  providers: [{
    provide:MessageService,
    useClass:LoggingMessageService
  }],
})
export class DecoratorModule {}

// When you rely on an interface or abstract class, you must provide a concrete implementation (e.g., using useClass) instead like providers: [DecoratorService] 

/*
  Summary of Choosing Between Decorator and Proxy
  Choose the Decorator Pattern when:

  -You want to add responsibilities or behaviors to objects dynamically.
  -You need to combine multiple behaviors in a flexible way.

  Choose the Proxy Pattern when:

  -You need to control access to an object (e.g., to implement lazy loading or security checks).
  -You want to manage the lifecycle of a resource-intensive object. 
*/
