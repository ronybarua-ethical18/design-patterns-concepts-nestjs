import { House } from "../models/house.model";

export class HouseBuilder {
    private house:House

    constructor(){
        this.house = new House()
    }

    // this: Enables Method Chaining, Maintains Type Safety
    setFoundation(foundation: string): this {
        this.house.foundation = foundation;
        return this;
      }
    
      setWalls(walls: string): this {
        this.house.walls = walls;
        return this;
      }
    
      setRoof(roof: string): this {
        this.house.roof = roof;
        return this;
      }
    
      addGarden(garden: string): this {
        this.house.garden = garden;
        return this;
      }
    
      addPool(pool: string): this {
        this.house.pool = pool;
        return this;
      }
    
      addGarage(garage: string): this {
        this.house.garage = garage;
        return this;
      }
    
      build(): House {
        return this.house;
      }
}