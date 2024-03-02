import React from "react";
import "./Bottom.css";
import ArrowButton from "../ArrowButton/ArrowButton";
import Details from "../Details/Details";
import { Type } from "../../models/Pokemon";

interface BottomProps {
    totalPokemons: number;
    pokemonId: number;
    name: string;
    types: Type[];
    changePokemon: (id: number) => void;
}

export default function Bottom(props: BottomProps) {

    const [pokemonId, setPokemonId] = React.useState<number>(props.pokemonId);
    
    const handleArrowClick = (direction: string) => {
        let newPokemonId = 0;
        if (direction === 'up') {
            if (pokemonId < 1025) {
                setPokemonId(pokemonId + 1);
                newPokemonId = pokemonId + 1;
            } else {
                setPokemonId(1);
                newPokemonId = 1;
            }
            props.changePokemon(newPokemonId);
        } else {
            if (pokemonId > 1) {
                setPokemonId(pokemonId - 1);
                newPokemonId = pokemonId - 1;
            } else {
                setPokemonId(1025);
                newPokemonId = 1025;
            }
            props.changePokemon(newPokemonId);
        }

    }

    return (
        <div className="Bottom">
            <div className="Arrows">
                <ArrowButton onClick={() => handleArrowClick('up')} />
                <ArrowButton onClick={() => handleArrowClick('down')} direction="down" />
                {/* <p>{pokemonId}</p> */}
            </div>
            <Details id={props.pokemonId} name={props.name} types={props.types} />
        </div>
    );
}
