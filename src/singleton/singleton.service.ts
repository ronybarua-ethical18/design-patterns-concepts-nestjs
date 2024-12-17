import { Injectable } from '@nestjs/common';

@Injectable()
export class SingletonDatabaseConnection {
  private static instance: SingletonDatabaseConnection; // holds single instance of the class

  //   The private keyword indicates that the constructor cannot be accessed from outside the class.
  //   This means that no other code can create an instance of SingletonDatabaseConnection using the new keyword.

  private constructor() {
    console.log('Database connection created');
    // Initialize database connection logic here
  }

  public static getInstance(): SingletonDatabaseConnection {
    if (!SingletonDatabaseConnection.instance) {
      SingletonDatabaseConnection.instance = new SingletonDatabaseConnection();
    }
    return SingletonDatabaseConnection.instance;
  }

  public testDB(query: string): string {
    return `The db query is ${query}`;
  }
}
