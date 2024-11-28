import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className, style }) => {
  const [ripple, setRipple] = useState(null);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipple({
      top: y,
      left: x,
      size: size,
    });

    // Call the passed onClick function if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      className={`button ${className}`} // Use button class from CSS
      onClick={handleClick}
      style={style}
      whileTap={{ scale: 0.95 }} // Adds a micro-interaction when clicking
      transition={{ duration: 0.1 }}
    >
      {/* Ripple effect */}
      {ripple && (
        <div
          className="ripple"
          style={{
            top: ripple.top,
            left: ripple.left,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      )}
      {children}
    </motion.button>
  );
};

export default Button;
