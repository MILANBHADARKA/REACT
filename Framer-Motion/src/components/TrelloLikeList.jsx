import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialTasks = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
  { id: 4, title: "Task 4" },
];

const TrelloLikeList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (e, draggedIndex) => {
    const reorderedTasks = [...tasks];
    const [draggedTask] = reorderedTasks.splice(draggedIndex, 1);

    // Get the nearest new position based on mouse position
    const dropTargetIndex = reorderedTasks.findIndex((task) => {
      const rect = document.getElementById(`task-${task.id}`).getBoundingClientRect();
      return e.clientY < rect.top + rect.height / 2; // Insert above the task if mouse is in its top half
    });

    // Insert the task at the drop position
    if (dropTargetIndex === -1) reorderedTasks.push(draggedTask);
    else reorderedTasks.splice(dropTargetIndex, 0, draggedTask);

    setTasks(reorderedTasks);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-lg font-bold text-gray-700 mb-4">Tasks</h1>
        <ul className="space-y-2">
          <AnimatePresence>
            {tasks.map((task, index) => (
              <motion.li
                id={`task-${task.id}`}
                key={task.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                drag
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.1 }}
                onDragEnd={(e) => handleDragEnd(e, index)}
                className="bg-blue-100 border border-blue-200 p-3 rounded-md shadow-sm cursor-grab"
              >
                {task.title}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default TrelloLikeList;
