import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import Turn from './components/Turn';


function App() {
  const [turnTitle, setTurnTitle] = useState("")
  const [playerLabel, setPlayerLabel] = useState("X")



  return (
    <div className="App">
    <Turn turnTitle={turnTitle} setTurnTitle={setTurnTitle} playerLabel={playerLabel} setPlayerLabel={setPlayerLabel}/>
    <Board turnTitle={turnTitle} setTurnTitle={setTurnTitle} playerLabel={playerLabel} setPlayerLabel={setPlayerLabel}/>
    </div>
  );
}

export default App;
