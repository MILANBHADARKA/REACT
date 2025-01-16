// layout: Smoothly animates layout shifts (e.g., resizing, reordering, etc.).
// Perfect for lists, dynamic content, and expanding cards.

import React, { useState } from "react";
import { motion } from "framer-motion";

const LayoutAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="w-32 h-32 bg-blue-400 flex justify-center items-center cursor-pointer"
      style={{ borderRadius: "20px" }}
    >
      {isOpen && (
        <motion.div layout className="w-16 h-16 bg-pink-400 rounded-full"></motion.div>
      )}
    </motion.div>
  );
};

export default LayoutAnimation;
