export abstract class Material {
  abstract describe(): string;
}

export abstract class Toy {
  constructor(protected material: Material) {}

  abstract build(): string;
}
