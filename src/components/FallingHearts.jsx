import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const FallingHearts = ({ showHearts }) => {
  const hearts = Array.from({ length: 18 }, (_, i) => ({ id: i, left: Math.random() * 110 }));

  return (
    <div >
      <AnimatePresence>
        {showHearts &&
          hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ opacity: 1, y: 700 }}
              animate={{ y: "100vh", opacity: 1 }}
              exit={{ opacity: 0,y: -40 }}
              transition={{ duration: 3, ease: "linear" }}
              className="absolute text-red-500 text-2xl"
              style={{ left: `${heart.left}%`, top: "-10px" }}
            >
              💓
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default FallingHearts