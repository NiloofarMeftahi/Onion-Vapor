import React from 'react';

const GameButtons = ({ stopGame, handleCrying, isCryingCheckVisible }) => {
  return (
    <div>
      {isCryingCheckVisible && (
        <div id="crying-button-container">
          <button onClick={() => handleCrying(true)}>Yes, I'm crying!</button>
          <button onClick={() => handleCrying(false)}>No, I'm not crying!</button>
        </div>
      )}
      <div id="stop-button-container">
        <button className="stop-game-button" onClick={stopGame}>Stop Game</button>
      </div>
    </div>
  );
};

export default GameButtons;
