import React from "react";

const Task = ({ job: { id, title, isDone }, removeTask, doneTask }) => {
  const handleDeleteBtn = () => {
    if (confirm("Are you sure to delete?")) {
      removeTask(id);
    }
  };

  const handleDoneTask = () => {
    doneTask(id);
  };
  return (
    <div className="border border-stone-400 p-3 mb-3 flex justify-between items-center">
      <div className="flex gap-3">
        <input
          onChange={handleDoneTask}
          checked={isDone}
          type="checkbox"
          className="accent-stone-900"
        />
        <p className={isDone ? "line-through text-gray-500 text-sm" : ""}>{title}</p>
      </div>
      <button
        onClick={handleDeleteBtn}
        className="bg-black text-white p-1.5 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
