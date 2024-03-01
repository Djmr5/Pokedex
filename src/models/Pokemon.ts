export interface Pokemon {
    id: number;
    name: string;
    sprites: Sprites;
    abilities: Ability[];
    moves: Move[];
    types: Type[];
    height: number;
    weight: number;
}

export interface Sprites {
    back_default: string;
    front_default: string;
    other: {
        "official-artwork": {
            front_default: string;
        }
    }
}

export interface Ability {
    ability: {
        name: string;
    };
}

export interface Move {
    move: {
        name: string;
    };
}

export interface Type {
    slot: number;
    type: {
        name: string;
    };
}
