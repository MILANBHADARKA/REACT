// staggerChildren: Controls the delay between animations of child components.

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StaggeredAnimation = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col gap-4"
  >
    <motion.div variants={childVariants} className="w-32 h-10 bg-blue-500"></motion.div>
    <motion.div variants={childVariants} className="w-32 h-10 bg-green-500"></motion.div>
    <motion.div variants={childVariants} className="w-32 h-10 bg-red-500"></motion.div>
  </motion.div>
);

export default StaggeredAnimation;
