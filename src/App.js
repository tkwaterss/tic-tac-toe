import React, { useState } from "react";
import Reset from "./components/Reset";
import Square from "./components/Square";
import NewPlayers from "./components/NewPlayers";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [players, setPlayers] = useState(['','']);

  const handleReset = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const addPlayers = (players) => {
    setPlayers(players)
  }

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
        if(array[a] === "X") {
          return `${players[0] ? players[0] : 'X'} Won!`
        } else {
          return `${players[1] ? players[1] : 'O'} Won!`
        }
      } 
    }
    return "Who Will Win???"
  };

  return (
    <div className="App">
      <NewPlayers addPlayers={addPlayers}/>
      <div className="name-container">
        <h2>{players[0] ? `Player 1 (X): ${players[0]}` : ''}</h2>
        <h2>{players[1] ? `Player 2 (O): ${players[1]}` : ''}</h2>
      </div>
      <Reset handleReset={handleReset}/>
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
