export interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    }

    abilities: [{
      ability: {
        name : string;
      }
    }];


}
