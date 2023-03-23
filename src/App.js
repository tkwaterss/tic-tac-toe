import React, { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleReset = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const checkWinner = (array) => {
    let lines = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for(let i = 0; i < lines.length; i++) {
      const [a ,b, c] = lines[i];
      if( array[a] && array[a] === array[b] && array[a] === array[c]) {
        return `${array[a]} Won!`;
      } 
    }
    return "Who Will Win???"
  };

  return (
    <div className="App">
      <button onClick={handleReset}>Reset</button>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              key={index}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={val}
              index={index}
            />
          );
        })}
      </div>
      <span>{checkWinner(squares)}</span>
    </div>
  );
}

export default App;
