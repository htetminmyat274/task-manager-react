import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(
    [{ id: 1, title: "Finish project report", isDone: false },
    { id: 2, title: "Prepare meeting presentation", isDone: false },
    { id: 3, title: "Code review", isDone: true },
    { id: 4, title: "Update website content", isDone: true },
    { id: 5, title: "Fix UI bug on homepage", isDone: false },
    { id: 6, title: "Schedule team meeting", isDone: true }]
  );

  const addTask = (job) => {
    setTasks([...tasks, job]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTasks(tasks.map(el => el.id === id ? {...el, isDone : !el.isDone}: el))
  }
  return (
    <div className="p-10 w-[500px] mx-auto">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} key={tasks.id} tasks={tasks} />
    </div>
  );
};

export default App;
