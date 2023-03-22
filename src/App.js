import React, { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
  const [gameSquares, setGameSquares] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [playerState, setPlayerState] = useState(true);

  return (
    <div className="App">
      <Square
        squares={gameSquares}
        setSquares={setGameSquares}
        player={playerState}
        setPlayer={setPlayerState}
      ></Square>
    </div>
  );
}

export default App;
