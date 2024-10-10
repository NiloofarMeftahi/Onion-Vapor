import React from 'react';

const Result = ({ tearDefenseScore, selectedDefense, resetGame, tearWiperGame }) => {
  return (
    <div>
      <div className="result-container">
        <h1>Game Over!</h1>
        <h2>Your Tear Defense Score: <span className="score">{tearDefenseScore}</span></h2>
        <h2>Defense Method Used: {selectedDefense}</h2>
        <button className="reset-button" onClick={resetGame}>Play Again</button>
        <h2>Wanna play a fun game?</h2>
        <button className="new-page-button" onClick={tearWiperGame}>Tear Wiper</button> {/* New button */}
      </div>
    </div>
  );
};

export default Result;
