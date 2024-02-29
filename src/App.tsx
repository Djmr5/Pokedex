import React, { useEffect } from 'react';
import './App.css';
import Top from './components/Top/Top';
import PokeImage from './components/PokeImage/PokeImage';
import Bottom from './components/Bottom/Bottom';
import { Pokemon } from './models/Pokemon';
function App() {

  const [pokemonsNumber, setPokemonsNumber] = React.useState<number>(0);
  const [pokemon, setPokemon] = React.useState<Pokemon|null>(null);
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then(response => response.json())
      .then(data => setPokemonsNumber(data.count));
  }, []);

  function getPokemon(pokemonId: number) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemon(data as Pokemon));
  };
  
  return (
    <div className="App">
      <Top/>
      <PokeImage/>
      <Bottom/>
      {/* <button onClick={() => console.log(pokemonsNumber)}>Log Pokemons</button>
      <button onClick={() => getPokemon(1)}>Get Pokemon</button>
      <button onClick={() => console.log(pokemon)}>Log Pokemon</button>
      <button onClick={() => console.log(pokemon?.types)}>Log Pokemon Types</button>
      <button onClick={() => console.log(pokemon?.types[0].type.name)}>Log Pokemon First Type</button>
      <button onClick={() => console.log(pokemon?.abilities)}>Log Pokemon Abilities</button>
      <button onClick={() => console.log(pokemon?.abilities[0].ability.name)}>Log Pokemon First Ability</button>
      <button onClick={() => console.log(pokemon?.moves)}>Log Pokemon Moves</button>
      <button onClick={() => console.log(pokemon?.moves[0].move.name)}>Log Pokemon First Move</button> */}
    </div>
  );
}

export default App;
