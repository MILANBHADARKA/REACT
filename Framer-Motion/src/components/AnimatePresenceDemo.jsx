import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function AnimatePresenceDemo() {

  const [isVisible, setIsVisible] = React.useState(true);


  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

      {/* Use AnimatePresence to handle mounting and unmounting animations. */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            I fade in and out!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatePresenceDemo