import { Injectable } from '@nestjs/common';

interface Shape {
  draw(): string;
}

class Circle implements Shape {
  draw(): string {
    return 'This is circle';
  }
}

class Square implements Shape {
  draw(): string {
    return 'This is square';
  }
}

@Injectable()
export class FactoryService {
  createShape(type: string): Shape {
    if (type === 'circle') {
      return new Circle();
    } else if (type === 'square') {
      return new Square();
    }
    throw new Error('Unknown shape type');
  }
}
