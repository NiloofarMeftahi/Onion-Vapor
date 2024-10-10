import React from 'react';

const Home = ({ startGame }) => {
  return (
    <div> 
      <h1>Onion Vapor Challenge</h1>
      
      {/* Wrapping instructions in a div with the slide-in animation */}
      <div className="instructions">
        <p>Choose a defense method and get an onion!</p>
        <p>Then start chopping!</p>
        <p>Every 10 seconds report if you are crying or not.</p>
        <p>Let's see which method works for you!</p>
      </div>
      
      <h2>Defense Methods:</h2>
      <div className="defense-methods">
        {["Fan", "Goggles", "Chewing Gum"].map((defense, index) => (
          <button key={index} onClick={() => startGame(defense)}>
            {defense}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
