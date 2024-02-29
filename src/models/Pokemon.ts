export interface Pokemon {
    id: number;
    name: string;
    abilities: Ability[];
    moves: Move[];
    types: Type[];
    height: number;
    weight: number;
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
