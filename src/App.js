import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import Turn from './components/Turn';


function App() {
  const [playerLabel, setPlayerLabel] = useState("X")



  return (
    <div className="App">
    <Turn playerLabel={playerLabel} />
    <Board playerLabel={playerLabel} setPlayerLabel={setPlayerLabel}/>
    </div>
  );
}

export default App;
