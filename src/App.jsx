import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="p-10 w-[500px] mx-auto">
      <Heading />
      <CreateTask />
      <TaskList />
    </div>

    // <Counter />
  );
};

export default App;
