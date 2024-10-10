import React, { useState, useEffect } from "react";
import Home from './Home';
import Game from './Game';
import Result from './Result';
import ChoppingGif from './ChoppingGif';
import GameButtons from './GameButtons';
import Timer from './Timer'; 

const GameController = () => {
  const [gameState, setGameState] = useState("home"); // home, game, result
  const [selectedDefense, setSelectedDefense] = useState(null);
  const [tearDefenseScore, setTearDefenseScore] = useState(0);
  const [isCrying, setIsCrying] = useState(false);
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const [blurAmount, setBlurAmount] = useState(0); // Starting with no blur
  const [isCryingCheckVisible, setIsCryingCheckVisible] = useState(false);

  useEffect(() => {
    let timerId;
    if (gameState === "game" && !isCryingCheckVisible) {
      timerId = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            setIsCryingCheckVisible(true); // Show crying check when timer hits zero
            return 10; // Reset to 10 seconds
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [gameState, isCryingCheckVisible]);

  const startGame = (defense) => {
    setSelectedDefense(defense);
    setTearDefenseScore(0);
    setIsCrying(false);
    setBlurAmount(4); // Apply initial blur when game starts
    setGameState("game");
    setTimer(10); // Start with a 10-second timer
    setIsCryingCheckVisible(false); // Reset crying check visibility
  };

  const handleCrying = (crying) => {
    setIsCryingCheckVisible(false); // Hide crying check after answering
    setTimer(10); // Reset timer to 10 seconds

    if (crying) {
      setIsCrying(true);
      setTearDefenseScore((prev) => prev - 1); // Decrease score by 1
      setBlurAmount((prev) => Math.min(prev + 2, 12)); // Increase blur
    } else {
      setIsCrying(false); // Update crying status
      setTearDefenseScore((prev) => prev + 1); // Increase score
      setBlurAmount((prev) => Math.max(prev - 2, 0)); // Decrease blur
    }
  };

  const stopGame = () => {
    setBlurAmount(0); // Reset blur when stopping the game
    setGameState("result");
  };

  const resetGame = () => {
    setGameState("home");
    setTimer(10);
    setSelectedDefense(null);
    setBlurAmount(0); // Reset blur when game resets
    setIsCryingCheckVisible(false); // Reset crying check visibility
  };

  return (
    <div className="game-controller" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}>
      <div style={{ filter: `blur(${blurAmount}px)`, flex: 1 }}>
        {gameState === "home" && <Home startGame={startGame} />}
        {gameState === "game" && (
          <Game
            selectedDefense={selectedDefense}
            isCrying={isCrying}
            tearDefenseScore={tearDefenseScore} 
            handleCrying={handleCrying}
          />
        )}
        {gameState === "result" && (
          <Result
            tearDefenseScore={tearDefenseScore}
            selectedDefense={selectedDefense}
            resetGame={resetGame}
          />
        )}
        {gameState === "game" && <ChoppingGif />} {/* Display GIF during the game */}
      </div>
      {gameState === "game" && (
       <div style={{ marginBottom: '20px', textAlign: 'center' }}>
       <Timer timeLeft={timer} />
     </div>
      )}
      {gameState === "game" && (
        <GameButtons
          stopGame={stopGame}
          handleCrying={handleCrying}
          isCryingCheckVisible={isCryingCheckVisible}
        />
      )}
     
    </div>
  );
};

export default GameController;
