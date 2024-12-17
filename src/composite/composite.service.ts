import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.intity';
import { CompositeTaskEntity } from './composite-task.entity';

@Injectable()
export class CompositeService {
  createTask(name: string, timeEstimate: number): TaskEntity {
    return new TaskEntity(name, timeEstimate);
  }
  createCompositeTask(name: string) {
    return new CompositeTaskEntity(name);
  }
}
