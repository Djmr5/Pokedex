import React from 'react';
import './App.css';
import Top from './components/Top/Top';
import PokeImage from './components/PokeImage/PokeImage';
import Bottom from './components/Bottom/Bottom';
function App() {

  return (
    <div className="App">
      <Top/>
      <PokeImage/>
      <Bottom/>
    </div>
  );
}

export default App;
