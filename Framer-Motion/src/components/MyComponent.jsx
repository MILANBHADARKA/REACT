import { motion } from "framer-motion";

const MyComponent = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },    // Initial hidden state
    visible: { opacity: 1, x: 0 },      // Target visible state
    hover: { scale: 1.2 },              // Hover state (scaled)
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.5 }}
      className="box"
    >
      Hover over me
    </motion.div>
  );
};

export default MyComponent;
