import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
  // const { tasks } = useContext(TaskContext);

  // with zustand
  const { tasks } = useTaskStore();
  return (
    <div>
      <h1 className="text-2xl mb-3">
        Task list (<span>{tasks.length}</span>) , Done (
        <span>{tasks.filter((el) => el.isDone).length}</span>)
      </h1>
      {tasks.map((el) => (
        <Task key={el.id} job={el} />
      ))}
    </div>
  );
};

export default TaskList;
