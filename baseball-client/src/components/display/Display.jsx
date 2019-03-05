import React from "react";

const Display = props => {
  if (!props.gameInfo) {
    return <h3>No Game Info</h3>;
  } else {
    return (
      <div>
        <h1>Game</h1>
        <h3 data-testid="strike-display">Strikes: {props.gameInfo.strike}</h3>
        <h3 data-testid="ball-display">Balls: {props.gameInfo.ball}</h3>
      </div>
    );
  }
};

export default Display;
