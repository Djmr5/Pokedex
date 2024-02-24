import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Top from './components/Top/Top';
import PokeImage from './components/PokeImage/PokeImage';
import Bottom from './components/Bottom/Bottom';
function App() {

  const [contador, setContador]= React.useState(0);

  function aumentar(){
    setContador(contador+1);
    console.log(contador);
  }
  function disminuir(){
    setContador(contador-1);
    console.log(contador);
  }
  return (
    <div className="App">
      <Top/>
      <PokeImage/>
      <Bottom/>
    </div>
  );
}

export default App;
