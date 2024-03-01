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
}

export default function Bottom(props: BottomProps) {

    const [pokemonId, setPokemonId] = React.useState<number>(props.pokemonId);
    
    const handleArrowClick = (direction: string) => {
        if (direction === 'up') {
            if (pokemonId < props.totalPokemons) {
                setPokemonId(pokemonId + 1);
            } else {
                setPokemonId(1);
            }
        } else {
            if (pokemonId > 2) {
                setPokemonId(pokemonId - 1);
            } else {
                setPokemonId(props.totalPokemons);
            }
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
