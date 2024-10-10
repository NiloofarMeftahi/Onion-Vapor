import React from 'react';

const Result = ({ tearDefenseScore, selectedDefense, resetGame }) => {
  return (
    <div>
      <div className="result-container">
      <h1>Game Over!</h1>
      <h2>Your Tear Defense Score: <span className="score">{tearDefenseScore}</span></h2>
      <h2>Defense Method Used: {selectedDefense}</h2>
      <button className="reset-button" onClick={resetGame}>Play Again</button>
    </div>
    </div>
    
  );
};

export default Result;
