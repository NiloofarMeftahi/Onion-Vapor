import React from 'react';

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer" style={{ fontSize: '24px', marginBottom: '10px' }}>
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
