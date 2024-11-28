// src/components/FlashlightCursor.js
import React, { useEffect, useState } from 'react';

const FlashlightCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flashlight-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    />
  );
};

export default FlashlightCursor;
