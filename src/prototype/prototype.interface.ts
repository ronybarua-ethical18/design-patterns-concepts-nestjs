export class Car {
  constructor(
    public model: string,
    public year: number,
  ) {}

  clone(): Car {
    // Create a copy of the current instance
    return new Car(this.model, this.year);
  }
}
