import React from 'react';

const ChoppingGif = () => {
  return (
    <div className="chopping-gif">
      <iframe
        title='ChoppingGif'
        src="https://giphy.com/embed/tyXo7h3mSiodwLW90j"
        width="300" 
        height="300" 
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
      <p><a href="https://giphy.com/gifs/celestialbean-celestialbeanart-celestial-bean-art-tyXo7h3mSiodwLW90j">via GIPHY</a></p>
    </div>
  );
};

export default ChoppingGif;
