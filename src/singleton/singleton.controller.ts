import { Controller, Get } from '@nestjs/common';
import { SingletonDatabaseConnection } from './singleton.service';

@Controller('singleton')
export class SingletonController {
  constructor(private readonly dbConnection: SingletonDatabaseConnection) {}

  @Get()
  getConnection(): string {
    this.dbConnection.testDB('find all user');
    return 'Database query executed!';
  }
}
