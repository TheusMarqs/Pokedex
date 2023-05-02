export interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
      other: {
        home: {
          front_default : string;
        }
      }

    }

    abilities: [{
      ability: {
        name : string;
      }
      slot: 1;
    },
    {
      ability: {
        name : string
      }
      slot: 2;
    }
  ];


}
