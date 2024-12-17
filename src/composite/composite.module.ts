import { Module } from '@nestjs/common';
import { CompositeService } from './composite.service';
import { CompositeController } from './composite.controller';

@Module({
  controllers: [CompositeController],
  providers: [CompositeService],
})
export class CompositeModule {}

/* 

The Composite Pattern allows you to treat individual objects and groups of objects uniformly, 
making it easier to work with complex structures in a consistent way.

Key Points
Leaf: TaskEntity (simple tasks with getName and getTimeEstimate).
Composite: CompositeTaskEntity (tasks that can contain other tasks).
Uniform Treatment: Both tasks and composite tasks are treated as TodoItem.


Real Example Projects

1. File Management System
2. Menu System in a Restaurant Application
3. E-commerce Product Catalog

*/
