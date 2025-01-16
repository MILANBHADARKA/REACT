import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

const SharedLayout = () => {
  const [selected, setSelected] = useState(null);

  const items = [1, 2, 3];

  return (
    <AnimateSharedLayout>
      <div className="flex gap-4">
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item}`}
            className="w-16 h-16 bg-blue-400"
            key={item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>
      {selected && (
        <motion.div
          layoutId={`card-${selected}`}
          className="w-64 h-64 bg-blue-700"
          onClick={() => setSelected(null)}
        >
          Expanded Card
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
};

export default SharedLayout;
