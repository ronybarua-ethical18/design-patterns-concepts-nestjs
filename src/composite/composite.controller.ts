import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompositeService } from './composite.service';
import { CompositeTaskEntity } from './composite-task.entity';

@Controller('composite')
export class CompositeController {
  private rootTask: CompositeTaskEntity;
  constructor(private readonly compositeService: CompositeService) {
    this.rootTask = this.compositeService.createCompositeTask('Default task')
  }

  @Post('add-task')
  addTask(
    @Body('name') name: string,
    @Body('timeEstimate') timeEstimate: number,
  ): string {
    const task = this.compositeService.createTask(name, timeEstimate);
    this.rootTask.addTask(task);
    return `Task "${name}" added to root task`;
  }

  @Post('add-composite-task')
  addCompositeTask(@Body('name') name: string): string {
    const compositeTask = this.compositeService.createCompositeTask(name);
    this.rootTask.addTask(compositeTask);
    return `Composite task "${name}" added to root task`;
  }

  @Get('list-tasks')
  listTasks(): string {
    return this.rootTask.listTasks();
  }
}
