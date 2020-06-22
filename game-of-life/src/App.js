import React from 'react';
import './App.css';
import MainTop from './components/MainTop';
import MainBttm from './components/MainBttm';

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <MainTop/>
      <MainBttm/>
    </div>
  );
}

export default App;
