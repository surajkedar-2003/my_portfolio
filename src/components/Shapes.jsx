import React from 'react';
import { motion } from 'framer-motion';

const Shapes = () => {
  return (
    <div className="absolute inset-0 z-3 overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-70"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-lg opacity-70"
        animate={{ y: [0, 100, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-green-400 rounded-full opacity-70"
        animate={{ x: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default Shapes;
