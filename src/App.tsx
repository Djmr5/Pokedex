import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
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
      <h1>HELLO WORLD {contador}</h1>
      <Button onClick={aumentar} label="Aumentar" color='blue'></Button>
      <Button onClick={disminuir} label="Disminuir" color='red'></Button>

    </div>
  );
}

export default App;
