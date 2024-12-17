import { Module } from '@nestjs/common';
import { SingletonDatabaseConnection } from './singleton.service';
import { SingletonController } from './singleton.controller';

@Module({
  controllers: [SingletonController],
  providers: [
    {
      provide: SingletonDatabaseConnection,
      useFactory: () => {
        return SingletonDatabaseConnection.getInstance();
      },

      /*
        Using useFactory in NestJS provides flexibility and control over how dependencies are instantiated. It allows you to:
          -Implement custom logic for creating instances.
          -Inject other dependencies into the factory function.
          -Dynamically configure instances based on conditions.
          -Keep the instantiation logic separate from the class implementation. 
      */
    },
  ],
})
export class SingletonModule {}
