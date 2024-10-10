import React from 'react';

const Game = ({ selectedDefense, tearDefenseScore }) => {
  return (
    <div>
      <h1>Chop Onions!</h1>
      <h2>Defense Method: {selectedDefense}</h2>
      <h2 className="tear-defense-score">
        Tear Defense Score: {tearDefenseScore}
      </h2>
    </div>
  );
};

export default Game;
