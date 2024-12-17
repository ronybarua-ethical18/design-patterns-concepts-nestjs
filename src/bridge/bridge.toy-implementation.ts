import { Toy } from "./bridge.abstraction";

export class Car extends Toy {
  build(): string {
    return `Car made of ${this.material.describe()}`;
  }
}


export class Doll extends Toy {
  build(): string {
    return `Doll made of ${this.material.describe()}`;
  }
}


export class Ball extends Toy {
  build(): string {
    return `Ball made of ${this.material.describe()}`;
  }
}
