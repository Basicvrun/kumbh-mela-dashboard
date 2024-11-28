// src/components/Stat.js
import React from 'react';
import { motion } from 'framer-motion';

const Stat = ({ label, value }) => (
  <motion.div
    animate={{ y: [0, 0, 0] }} // Bounce effect
    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} // Infinite bouncing
  >
    <p className="text-sm font-semibold text-secondary-warmGrey">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </motion.div>
);

export default Stat;
