import { TodoItem } from './composite.interface';

export class TaskEntity implements TodoItem {
  constructor(
    private name: string,
    private timeEstimate: number,
  ) {}
  getName(): string {
    return this.name;
  }
  getTimeEstimate(): number {
    return this.timeEstimate;
  }
}
