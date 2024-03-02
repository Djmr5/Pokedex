import React from 'react';
import { PokeApi } from '../../api/PokeApi';

interface SearchProps{
    changePokemonByName: (name: string) => void;
}

export default function SearchBar(props:SearchProps) {
    const [pokemonName, setPokemonName] = React.useState('');
    
    function changePokemonByName(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        try{
            props.changePokemonByName(pokemonName);
        }
        catch(e){
            console.log(e)}
    }
    
    return (
        <form className="mb-4 w-11/12" onSubmit={changePokemonByName}>
            <input
                type="text"
                onChange={(e) => {setPokemonName(e.target.value)}}
                placeholder="Search Pokémon"
                className="border-black border-2 rounded-md p-2 w-full"
            />
            
        </form>
    );
}
