// src/App.js
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

// A Balloon component that receives left offset and animation delay.
const Balloon = ({ left, delay, color }) => {
  const style = {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    backgroundColor: color,
  };
  return (
    <div className="balloon" style={style}>
      <div className="string"></div>
    </div>
  );
};

function App() {
  // State to hold window dimensions for Confetti
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // List of balloon props – you can add more or change colors.
  const balloons = [
    { left: 15, delay: 0, color: '#ffdd59' },
    { left: 45, delay: 2, color: '#ff6b81' },
    { left: 75, delay: 4, color: '#6bc5ff' },
    { left: 30, delay: 1, color: '#a29bfe' },
    { left: 60, delay: 3, color: '#55efc4' },
  ];

  return (
    <div className="container">
      {/* Confetti effect */}
      <Confetti width={dimensions.width} height={dimensions.height} recycle={true} numberOfPieces={200} />

      {/* Background music */}
      <audio src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" autoPlay loop />
      
      <h1>🎉 Happy Birthday! 🎉</h1>
      <p>Wishing you a day filled with love, joy, and endless surprises! 🥳</p>
      
      {/* Render animated balloons */}
      {balloons.map((balloon, index) => (
        <Balloon key={index} left={balloon.left} delay={balloon.delay} color={balloon.color} />
      ))}
    </div>
  );
}

export default App;
