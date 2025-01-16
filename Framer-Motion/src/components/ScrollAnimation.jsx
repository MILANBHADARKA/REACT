import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ScrollAnimation = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <div ref={ref} className="h-[100vh] flex items-center">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 2 }}
        className="w-32 h-32 bg-purple-500"
      ></motion.div>
    </div>
  );
};

export default ScrollAnimation;
