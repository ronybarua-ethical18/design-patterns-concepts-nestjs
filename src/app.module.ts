import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoryModule } from './factory/factory.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';
import { BuilderModule } from './builder/builder.module';
import { SingletonModule } from './singleton/singleton.module';
import { PrototypeModule } from './prototype/prototype.module';
import { AdapterModule } from './adapter/adapter.module';
import { ProxyModule } from './proxy/proxy.module';
import { DecoratorModule } from './decorator/decorator.module';
import { CompositeModule } from './composite/composite.module';
import { BridgeModule } from './bridge/bridge.module';
import { FacadeModule } from './facade/facade.module';

@Module({
  imports: [
    FactoryModule,
    AbstractFactoryModule,
    BuilderModule,
    SingletonModule,
    PrototypeModule,
    AdapterModule,
    ProxyModule,
    DecoratorModule,
    CompositeModule,
    BridgeModule,
    FacadeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
