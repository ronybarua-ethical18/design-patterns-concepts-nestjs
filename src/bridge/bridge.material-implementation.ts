import { Material } from "./bridge.abstraction";


export class Plastic extends Material {
  describe(): string {
    return 'Plastic';
  }
}


export class Wood extends Material {
  describe(): string {
    return 'Wood';
  }
}

export class Metal extends Material {
  describe(): string {
    return 'Metal';
  }
}
