import React, { useEffect, useRef, useState } from 'react';
import choppedOnion from '../assets/photos/choppedonion.jpg';

// Import images for each defense method
import fanImage from '../assets/photos/fan.jpg';
import gogglesImage from '../assets/photos/goggles.jpg';
import gumImage from '../assets/photos/gum.jpg';

const eraser = {
  "Fan": fanImage,
  "Goggles": gogglesImage,
  "Chewing Gum": gumImage,
};

const TearWiper = ({ onReturnToHome, selectedDefense }) => {
  const canvasRef = useRef(null);
  const [eraserPosition, setEraserPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const eraserSize = 50; 

  // Use the selected defense to choose the eraser image
  const eraserImage = eraser[selectedDefense] || gumImage; // Fallback to gumImage if defense method is not found

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = choppedOnion;
    

    image.onload = () => {
        
      // Apply blur to the image on the canvas
      ctx.filter = 'blur(10px)'; // Set the blur effect
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Draw the blurred image
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    erase(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      erase(e);
    }
  };

  const erase = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Erase the blur 
    ctx.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
    setEraserPosition({ x, y });
  };

  return (
    <div
      className="tear-wiper-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
      style={{ position: 'relative', textAlign: 'center' }} 
    >
      <h1>Welcome to Tear Wiper!</h1>
      <h2>Defense Method: {selectedDefense}</h2>
      <div className="instructions">
        <p>Use the {selectedDefense} and wipe the tears!</p>
      </div>

      <button
        className="reset-button"
        style={{ marginBottom: '20px', cursor: 'pointer' }}
        onClick={onReturnToHome}
      >
        Exit Game
      </button>

      {/* Canvas for the blurred image */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          className="canvas"
          style={{ position: 'absolute', top: '0', left: '0', zIndex: 1 }} // Lower zIndex for the canvas
        />
        <img
          src={choppedOnion}
          alt="Small Chopped Onion"
          style={{ width: '400px', height: 'auto'}}
        />
        {/* Use the defense method image as the eraser */}
        <img
          src={eraserImage}
          alt="Eraser"
          style={{
            position: 'absolute',
            top: `${eraserPosition.y - eraserSize / 2}px`,
            left: `${eraserPosition.x - eraserSize / 2}px`,
            width: `${eraserSize}px`, // Control the size of the eraser image
            height: `${eraserSize}px`,
            pointerEvents: 'none', // Prevent eraser from interfering with mouse events
            zIndex: 2, // Make sure the eraser is above the canvas
          }}
        />
      </div>
    </div>
  );
};

export default TearWiper;
