import React from "react";
import Task from "./Task";

const TaskList = ({tasks,removeTask,doneTask}) => {
  return (
    <div>
      <h1 className="text-2xl mb-3">
        Task list (<span>{tasks.length}</span>) , Done (<span>{tasks.filter(el => el.isDone).length}</span>)
      </h1>
      {tasks.map(el => <Task doneTask={doneTask} removeTask={removeTask} key={el.id} job={el} />)}
    </div>
  );
};

export default TaskList;
