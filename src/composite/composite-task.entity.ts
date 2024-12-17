import { TodoItem } from './composite.interface';

export class CompositeTaskEntity implements TodoItem {
  private subtasks: TodoItem[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getTimeEstimate(): number {
    return this.subtasks.reduce(
      (total, task) => total + task.getTimeEstimate(),
      0,
    );
  }

  addTask(task: TodoItem): void {
    this.subtasks.push(task);
  }

  listTasks(): string {
    return this.subtasks
      .map((task) => `- ${task.getName()} (${task.getTimeEstimate()} hours)`)
      .join('\n');
  }
}
