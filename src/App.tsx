import React, { useEffect } from 'react';
import './App.css';
import Top from './components/Top/Top';
import PokeImage from './components/PokeImage/PokeImage';
import Bottom from './components/Bottom/Bottom';
import { Pokemon } from './models/Pokemon';
import SearchBar from './components/SearchBar/SearchBar';
import { PokeApi } from './api/PokeApi';
function App() {

  const [pokemonsNumber, setPokemonsNumber] = React.useState<number>(0);
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

  useEffect(() => {
    PokeApi.getAllPokemons().then((response) => {
      setPokemonsNumber(response.data.count);
    });
    PokeApi.getPokemonById(1).then((response)=>{
      setPokemon(response.data as Pokemon);
    });
  }, []);

  return (
    <div className="App">
      <Top/>
      <SearchBar/>
      
      <PokeImage
        src={pokemon?.sprites.other['official-artwork'].front_default??''}
        alt={(pokemon?.name ?? '') + ' image'}
      />
      <Bottom
        totalPokemons={pokemonsNumber}
        pokemonId={pokemon?.id ?? 0}
        name={pokemon?.name ?? ''}
        types={pokemon?.types ?? []}
      />
    </div>
  );
}

export default App;
