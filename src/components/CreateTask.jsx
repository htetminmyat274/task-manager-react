import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";

const CreateTask = () => {
  // with context
  // const {addTask} = useContext(TaskContext);

  // with zustand
  const { addTask } = useTaskStore();
  const [job, setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };
  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      title: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
  };
  return (
    <div className="mb-5 flex">
      <input
        value={job}
        onChange={handleOnChange}
        placeholder="Add your task"
        className="flex-grow border border-black p-3 outline-none focus:border-black"
      ></input>
      <button
        onClick={handleAddTaskBtn}
        className="border border-black bg-black text-white p-3"
      >
        Add
      </button>
    </div>
  );
};

export default CreateTask;
