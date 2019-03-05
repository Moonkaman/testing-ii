import React, { useState } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";

import "./App.css";

const App = props => {
  // state = {
  //   strike: 0,
  //   ball: 0
  // }
  const [gameInfo, setGameInfo] = useState({
    strike: 0,
    ball: 0
  });

  const addStrike = e => {
    e.preventDefault();
    if (gameInfo.strike >= 2) {
      setGameInfo({
        ball: 0,
        strike: 0
      });
    } else {
      setGameInfo({
        ...gameInfo,
        strike: ++gameInfo.strike
      });
    }
  };

  const addBall = e => {
    e.preventDefault();
    if (gameInfo.ball >= 3) {
      setGameInfo({
        ball: 0,
        strike: 0
      });
    } else {
      setGameInfo({
        ...gameInfo,
        ball: ++gameInfo.ball
      });
    }
  };

  const foul = e => {
    e.preventDefault();
    if (gameInfo.strike < 2) {
      setGameInfo({
        ...gameInfo,
        strike: ++gameInfo.strike
      });
    }
  };

  const hit = e => {
    e.preventDefault();
    setGameInfo({
      ball: 0,
      strike: 0
    });
  };

  return (
    <div className="App">
      <Display gameInfo={gameInfo} />
      <Dashboard
        addStrike={addStrike}
        addBall={addBall}
        foul={foul}
        hit={hit}
      />
    </div>
  );
};

export default App;
