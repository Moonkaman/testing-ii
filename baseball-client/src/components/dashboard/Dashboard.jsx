import React from "react";

const Dashboard = props => {
  return (
    <div>
      <button data-testid="strike-btn" onClick={props.addStrike}>
        Strike
      </button>
      <button data-testid="ball-btn" onClick={props.addBall}>
        Ball
      </button>
      <button data-testid="foul-btn" onClick={props.foul}>
        Foul
      </button>
      <button data-testid="hit-btn" onClick={props.hit}>
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
