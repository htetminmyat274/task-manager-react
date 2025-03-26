import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish project report", isDone: false },
    { id: 2, title: "Prepare meeting presentation", isDone: false },
    { id: 3, title: "Code review", isDone: true },
    { id: 4, title: "Update website content", isDone: true },
    { id: 5, title: "Fix UI bug on homepage", isDone: false },
    { id: 6, title: "Schedule team meeting", isDone: true },
  ]);

  const addTask = (job) => {
    setTasks([...tasks, job]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, doneTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
