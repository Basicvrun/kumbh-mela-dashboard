// src/components/Card.js
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, children, icon, color, image, className }) => (
  <motion.div
    className={`card ${className} bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg my-4`} 
    initial={{ opacity: 0 }}  // No vertical movement (no bounce)
    animate={{ opacity: 1 }}  // Only fade-in effect
    transition={{ duration: 0.3 }}
    style={{ borderTop: `4px solid ${color}` }}
  >
    {/* Hero Image */}
    {image && (
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      </div>
    )}

    <div className="flex items-center mb-4">
      {icon && <div className="mr-2 text-2xl" style={{ color }}>{icon}</div>}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    
    <div>{children}</div>
  </motion.div>
);

export default Card;
