import React from "react";
import { motion } from "framer-motion";

function Motionone() {
  const boxVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <h1>Motionone</h1>
      <motion.div
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Final state
        transition={{ duration: 1 }} // Duration of the animation
      >
        Hello, Framer Motion!
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        Slide In Animation
      </motion.div>
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        Reusable Animation
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Hover & Tap Me!
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        This fades in and out.
      </motion.div>
      <motion.div
        animate={{ x: [0, 100, 0], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Keyframe Animation
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 3000, damping: 10 }} //stiffness: Controls how "bouncy" the animation is. damping: Controls the amount of resistance.
      >
        Spring Animation
      </motion.div>

      {/* drag: Makes an element draggable.
      dragConstraints: Defines boundaries for the drag. */}
      <motion.div
        drag
        dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
        className="w-32 h-32 bg-green-500"
      >
        Drag Me!
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="w-32 h-32 bg-red-500"
      >
        Interactive Box
      </motion.div>
      <motion.div
        animate={{ x: 200 }}
        transition={{
          duration: 1,
          ease: [0.17, 0.67, 0.83, 0.67], // Custom Bezier curve
        }}
      >
        Custom Eased Animation
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.5, 1.2, 1],
          rotate: [0, 90, 180, 0],
          borderRadius: ["0%", "50%", "20%", "0%"],
        }}
        transition={{ duration: 2 }}
      >
        Advanced Keyframes
      </motion.div>
    </div>
  );
}

export default Motionone;
