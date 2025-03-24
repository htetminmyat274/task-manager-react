import React from "react";

const Task = ({ job, removeTask }) => {
  const handleDeleteBtn = () => {
    if(confirm("Are you sure to delete?")){
        removeTask(job);
    }
  };
  return (
    <div className="border border-stone-400 p-3 mb-3 flex justify-between items-center">
      <p>{job}</p>
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
