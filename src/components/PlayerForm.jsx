import React, { useState } from "react";
import "./PlayerForm.css";

const PlayerForm = (props) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const trackPlayerOne = (event) => {
    setPlayerOne(event.target.value);
  };
  const trackPlayerTwo = (event) => {
    setPlayerTwo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let players = [playerOne, playerTwo];
    //on submit add class that removes JSX and insert button to add new players
    props.addPlayers(players);

    props.stopEditing(false);
    setPlayerOne("");
    setPlayerTwo("");
  };

  return (
    <form onSubmit={submitHandler} className="player-form">
      <div className="input-container">
        <input
          className="form-input"
          onChange={trackPlayerOne}
          value={playerOne}
          type="text"
          placeholder="Player 1"
        />
        <input
          className="form-input"
          onChange={trackPlayerTwo}
          value={playerTwo}
          type="text"
          placeholder="Player 2"
        />
      </div>
      <button className="form-button reset">Submit</button>
    </form>
  );
};

export default PlayerForm;
